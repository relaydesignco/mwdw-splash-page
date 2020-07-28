export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Midwest Design Week',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Virtual Design Week featuring Louisville, Cincinnati, Indiananpolis, and Toledo AIGA Chapters.',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        value:
          'Virtual Design Week featuring Louisville, Cincinnati, Indiananpolis, and Toledo AIGA Chapters.',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Midwest Design Week',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'article',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://midwestdesignweek.com',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://midwestdesignweek.com/og-image.jpg',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Virtual Design Week featuring Louisville, Cincinnati, Indiananpolis, and Toledo AIGA Chapters.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [], // stylesheet being loaded by @nuxt/tailwindcss

  webfontloader: {
    // typekit: {
    //   id: 'xxxxxx', // for Adobe Typekit fonts
    // },
    google: {
      families: ['Source Sans Pro:300,400,600,700'], // Google Font with weights 400 and 700
    },
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/dateformat.js'],
  generate: {},
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/tailwindcss', 'nuxt-webfontloader'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    extend(config, ctx) {},
  },
};
