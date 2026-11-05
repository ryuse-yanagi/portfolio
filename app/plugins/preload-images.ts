export default defineNuxtPlugin(async () => {
  const urls = projectImageUrls(useRuntimeConfig().app.baseURL)

  useHead({
    link: urls.map((href) => ({ rel: 'preload', as: 'image', href, key: href })),
  })

  if (import.meta.server) return

  await retireImageServiceWorker(publicAssetUrl(useRuntimeConfig().app.baseURL, 'sw.js'))
  await preloadImages(urls)
})

async function retireImageServiceWorker(scriptUrl: string) {
  if (!('serviceWorker' in navigator)) return

  const existing = await navigator.serviceWorker.getRegistrations()
  if (existing.length === 0 && !navigator.serviceWorker.controller) {
    await deletePortfolioCaches()
    return
  }

  try {
    const registration = await navigator.serviceWorker.register(scriptUrl)
    await waitUntilActive(registration)
  } catch {
    // The previous worker can still be removed below.
  }

  const registrations = await navigator.serviceWorker.getRegistrations()
  await Promise.all(registrations.map((registration) => registration.unregister()))
  await deletePortfolioCaches()
}

function waitUntilActive(registration: ServiceWorkerRegistration) {
  const worker = registration.installing || registration.waiting
  if (!worker || worker.state === 'activated') return Promise.resolve()

  return new Promise<void>((resolve) => {
    const timeout = window.setTimeout(resolve, 4000)
    worker.addEventListener('statechange', () => {
      if (worker.state === 'activated' || worker.state === 'redundant') {
        window.clearTimeout(timeout)
        resolve()
      }
    })
  })
}

async function deletePortfolioCaches() {
  if (!('caches' in window)) return
  const keys = await caches.keys()
  await Promise.all(
    keys
      .filter((key) => key.startsWith('portfolio-images'))
      .map((key) => caches.delete(key)),
  )
}
