// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxt/image'],
  app: {
    head: {
      title: `Brill's Portfolio`,
      meta: [
        { name: 'description', content: 'This is my amazing portfolio using Nuxt 3 framework.' },
        { property: 'og:image', content: '/images/portfolio-brillnash-vercel.png' },
        { property: 'og:url', content: 'https://portfolio-brillnash.vercel.app' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/atom.png'
        }
      ]
    },
  },
  compatibilityDate: '2025-04-24',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  components: [{
    path: "~/components",
    pathPrefix: false
  }],
  fonts: []

})
