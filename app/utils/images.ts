import { projects } from '~/data/site'

const decodedImages = new Map<string, HTMLImageElement>()
const fetchedImages = new Set<string>()
const pendingImages = new Map<string, Promise<void>>()

export function publicAssetUrl(baseURL: string, path: string) {
  const base = baseURL || '/'
  const prefix = base.endsWith('/') ? base : `${base}/`
  return `${prefix}${path.replace(/^\//, '')}`
}

export function projectImageUrls(baseURL: string) {
  const urls = new Set<string>()
  for (const project of projects) {
    urls.add(publicAssetUrl(baseURL, project.images.card))
    urls.add(publicAssetUrl(baseURL, project.architectureImage))
    for (const shot of project.images.screenshots) {
      urls.add(publicAssetUrl(baseURL, shot.src))
    }
  }
  return [...urls]
}

export function isImageReady(url: string) {
  if (!import.meta.client) return false
  return decodedImages.has(absoluteUrl(url))
}

export function preloadImages(urls: string[]) {
  return Promise.all(urls.map((url) => preloadImage(url)))
}

function preloadImage(url: string) {
  const key = absoluteUrl(url)
  if (fetchedImages.has(key)) return Promise.resolve()

  const existing = pendingImages.get(key)
  if (existing) return existing

  const task = new Promise<void>((resolve) => {
    const image = new Image()
    const finish = () => {
      pendingImages.delete(key)
      fetchedImages.add(key)
      resolve()
    }

    image.onload = () => {
      const decoded = typeof image.decode === 'function' ? image.decode() : Promise.resolve()
      decoded
        .catch(() => undefined)
        .finally(() => {
          if (image.naturalWidth > 0) decodedImages.set(key, image)
          finish()
        })
    }
    image.onerror = finish
    image.src = key
  })

  pendingImages.set(key, task)
  return task
}

function absoluteUrl(url: string) {
  return new URL(url, window.location.origin).href
}
