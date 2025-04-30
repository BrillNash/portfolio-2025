// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/fonts'],
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
    },
  },
  compatibilityDate: '2025-04-24',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: [{
    path: "~/components",
    pathPrefix: false
  }],
  fonts: []

})