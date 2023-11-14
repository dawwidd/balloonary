export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'balloonary',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persistedState.client.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // other modules...
  ],

  // proxy: {
  //   '/api/': {
  //     target: 'https://thingproxy.freeboard.io/fetch/',
  //     pathRewrite: { '^/api/': '' },
  //     changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  //   }
  // },

  axios: {
    baseURL: 'https://thingproxy.freeboard.io/fetch/https://rickandmortyapi.com/api/', // Don't set this since we're using a proxy
    // proxy: true, // Enable the axios proxy
  },
  
  bootstrapVue: {
    icons: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      }
    }
  },
}
