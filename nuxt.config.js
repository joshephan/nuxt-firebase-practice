export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "firebase-example",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  target: "static",
  css: [],
  plugins: [],
  // auto import component
  components: true,
  buildModules: [],
  env: {
    FIRE_ENV: process.env.FIRE_ENV
  },
  modules: [["@nuxtjs/firebase"]],
  firebase: {
    config: {
      production: {
        apiKey: "AIzaSyDKQhHbWaNtkzkO2bRz8qSx2m9XS3k2rt0",
        authDomain: "practice-1-78658.firebaseapp.com",
        projectId: "practice-1-78658",
        storageBucket: "practice-1-78658.appspot.com",
        messagingSenderId: "476235546922",
        appId: "1:476235546922:web:c5957bc2764627c0351e53",
        measurementId: "G-T22RJ1CPE3"
      },
      development: {
        apiKey: "AIzaSyDKQhHbWaNtkzkO2bRz8qSx2m9XS3k2rt0",
        authDomain: "practice-1-78658.firebaseapp.com",
        projectId: "practice-1-78658",
        storageBucket: "practice-1-78658.appspot.com",
        messagingSenderId: "476235546922",
        appId: "1:476235546922:web:c5957bc2764627c0351e53",
        measurementId: "G-T22RJ1CPE3"
      }
    },
    services: {
      auth: true // Just as example. Can be any other service.
    }
  },
  build: {}
};
