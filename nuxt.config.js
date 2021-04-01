export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'webdux',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
 // Global CSS: https://go.nuxtjs.dev/config-css
 css: [
  '@/assets/css/bootstrap.min.css',
  '@/assets/css/font-awesome.min.css',
  '@/assets/css/animate.min.css',
  '@/assets/css/lightbox.css',
  '@/assets/css/main.css',
  '@/assets/css/responsive.css'
],
js: [
 '@/assets/js/bosstrap.min.js',
 '@/assets/js/jquery.js',
 '@/assets/js/bootstrap.min.js',
 '@/assets/js/lightbox.min.js',
 '@/assets/js/wow.min.js',
 '@/assets/js/main.js',
],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
