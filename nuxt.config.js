module.exports = {
  css: [
    'node_modules/the-grid-flexbox/css/the-grid.min.css'
  ],
  head: {
    title: 'DevCards',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1, maximum-scale=1, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DevCards intro' },
      { name: 'author', content: 'Helpy' },
      { name: 'robots', content: 'index/follow' },
      { name: 'googlebot', content: 'index/follow' },
      // google+
      { itemprop: 'name', content: 'DevCards' },
      { itemprop: 'description', content: 'O jeito mais fácil de você se tornar um Dev.' },
      { itemprop: 'image', content: 'https://dev-cards.herokuapp.com/intro.png' },
      // facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'DevCards' },
      { property: 'og:url', content: 'https://github.com/gustavoquinalha/devcards/' },
      { property: 'og:site_name', content: 'DevCards' },
      { property: 'og:image', content: 'https://dev-cards.herokuapp.com/intro.png' },
      { property: 'og:description', content: 'O jeito mais fácil de você se tornar um Dev.' },
      { property: 'og:locale', content: 'pt_Br' },
      { property: 'fb:app_id', content: '122670998365518' },
      { property: 'fb:admins', content: '111111' },
      // twitter
      { name: 'twitter:card', content: 'Summary' },
      { name: 'twitter:title', content: 'DevCards' },
      { name: 'twitter:description', content: 'O jeito mais fácil de você se tornar um Dev.' },
      { name: 'twitter:creator', content: 'https://github.com/gustavoquinalha/devcards' },
      { name: 'twitter:image', content: 'https://dev-cards.herokuapp.com/intro.png' },
      // android
      { name: 'msapplication-TileColor', content: '#0081FF' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#0081FF' }
    ],
    link: [
      { rel: 'sitemap', type: 'application/xml', content: 'https://github.com/gustavoquinalha/devcards/sitemap.xml' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
      { rel: 'base', href: 'https://github.com/gustavoquinalha/devcards' },
      { rel: 'canonical', href: 'https://github.com/gustavoquinalha/devcards' }
    ],
    script: [{
      // src: 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'
    }],

  },

  loading: { color: '#00ce8c', height: '5px' },

  plugins: [
  // { src: '~plugins/wowjs.js', ssr: false }
  ],

  build: {

  }
}
