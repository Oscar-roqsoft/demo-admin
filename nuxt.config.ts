// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr:false,

  build: {
    transpile: ['vuetify'],
  },

 
  srcDir: "src",

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'notivue/nuxt'
  ],

  css: [
    'notivue/notification.css', // Only needed if using built-in <Notification />
    'notivue/animations.css' // Only needed if using default animations
  ],
  
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})

