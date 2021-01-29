export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Project Sermo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Montserrat:wght@400;500;600&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/toast',
    '@nuxtjs/feed',
    '@nuxtjs/markdownit',
  ],

  hooks: {
    'content:file:beforeInsert': (document) => {
      const md = require('markdown-it')()

      if (document.extension === '.md') {
        const time = require('reading-time')(document.text)
        document.readingTime = time

        const mdToHtml = md.render(document.text)
        document.fullText = mdToHtml
      }
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },

    liveEdit: false,
  },

  toast: {
    position: 'bottom-right',
  },

  feed: [
    {
      path: '/feed.xml',
      async create(feed) {
        const baseUrlArticles = 'https://projectsermo.com/blog/'

        feed.options = {
          title: 'Project Sermo',
          link: 'https://projectsermo.com/rss.xml',
          description: 'Welcome to Project Sermo!',
        }

        const { $content } = require('@nuxt/content')

        const articles = await $content('articles')
          .sortBy('createdAt', 'desc')
          .fetch()

        articles.forEach((element) => {
          feed.addItem({
            title: element.title,
            id: element.path,
            link: baseUrlArticles + element.slug,
            description: element.description,
            content: element.fullText,
          })
        })

        feed.addCategory('Posts')

        feed.addContributor({
          name: 'Laksh Chakraborty',
          email: 'laksh@projectsermo.com',
          link: 'https://www.projectsermo.com',
        })
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
      data: [],
    },
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
