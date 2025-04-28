// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  compatibilityDate: '2025-04-24',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: [{
    path: "~/components",
    pathPrefix: false
  }]

})