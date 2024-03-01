// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
  ],
  pinia: {
    autoImports: [
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  googleFonts: {
    // Options
    families: {
      Roboto: true,
      'Noto+Sans+TC': [100, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  i18n: {
    locales: ['en', 'zh_TW'],
    defaultLocale: 'zh_TW',
  },

  imports: {
    dirs: ['store'],
  },
});
