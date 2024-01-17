// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from 'nuxt'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-swiper'],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
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