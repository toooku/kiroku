// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: [
    '@element-plus/nuxt'
  ],
  css: [
    'normalize.css/normalize.css'
  ],
  elementPlus: { /** Options */ },
  devtools: { enabled: true }
})
