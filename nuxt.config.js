import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
 
  css: ["@/assets/css/main.css"],
 
  meta: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      },
    ],

    

    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
      },
    ],
  },
  buildModules: ['@pinia/nuxt'],
});
