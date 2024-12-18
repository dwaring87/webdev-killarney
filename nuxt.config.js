export default {

  ssr: false,

  target: 'static',

  generate: {
    routes: function() {
      let paths = [];
      const tours = ['muckross'];
      for ( let i = 0; i < tours.length; i++ ) {
        let tour = tours[i];
        const data = require(`./data/${tour}.json`);
        paths = paths.concat([
          `/tour/${tour}/`,
          `/tour/${tour}/complete/`,
          `/tour/${tour}/photo/`,
          `/tour/${tour}/register/`,
          `/tour/${tour}/start/`,
          `/tour/${tour}/summary/`
        ]);
        for ( let j = 0; j < data.stops.length; j++ ) {
          paths = paths.concat([
            `/tour/${tour}/stop/${j}/arrive/`,
            `/tour/${tour}/stop/${j}/navigate/`,
          ])
        }
      }
      return paths;
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Killarney Bicycle Tours',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/universal-storage',
    'nuxt-leaflet',
    'vue-plausible'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  storage: {},

  plausible: {
    domain: 'tour.killarneybicycletours.com',
    apiHost: 'https://a.davidwaring.net',
    enableAutoPageviews: true,
    hashMode: true,
    trackLocalhost: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
