// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
      title: 'Portfolio',
      meta: [
        {
          name: 'description',
          content: 'クラウドエンジニア志望のポートフォリオ',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: 'favicon.png' },
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/projects/workmana'],
    },
  },
})
  