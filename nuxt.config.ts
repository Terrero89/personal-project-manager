import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({

  css: ["@/assets/css/main.css"],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  meta: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      },
    ],



    script: [
      {
        rel: "stylesheet",
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      },

    ],
  },
  buildModules: ['@pinia/nuxt'],
  build: {
    transpile: ['lodash-es', 'vue-chart-3', 'chart.js'],
  }

});
