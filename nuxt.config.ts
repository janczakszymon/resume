// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
  googleFonts: {
    download: true,
    families: {
      'Roboto Mono': {
        wght: '300..700',
      }
    },
  }
})