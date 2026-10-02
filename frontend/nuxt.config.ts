// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
  ],
  colorMode: {
    preference: "system",
    fallback: "light",
  },
  css: ["./app/assets/css/main.css"],
  eslint: {
    config: {
      standalone: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    preset: 'vercel',
    sourceMap: false
  },
  runtimeConfig: {
    authPassword: process.env.APP_PASSWORD || process.env.AUTH_PASSWORD || 'changeme'
  }
});
