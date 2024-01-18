// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-swiper'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width',
    }
  },
  css: ['~/assets/css/index.css'],
  components: {
    "dirs": [
      {
        "path": "~/components/global",
        "global": true
      },
      "~/components"
    ]
  }
})