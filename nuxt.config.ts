export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  components: false, // Make components import manually.
  css: ["~/scss/main.scss"],
  modules: ["@pinia/nuxt"],
});
