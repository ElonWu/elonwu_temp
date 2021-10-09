module.exports = {
  title: 'ELONWU_ELONWU_APP_TITLE',

  favicon: 'favicon.png',
  description: 'ELONWU_APP_TITLE',
  keywords: ['ElonWu', 'ELONWU_APP_TITLE'],
  shareOptions: [
    {
      property: 'og:title',
      content: 'ELONWU_APP_TITLE',
    },

    {
      property: 'og:site_name',
      content: 'ELONWU_APP_TITLE',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: 'ELONWU_APP_TITLE',
    },
    {
      property: 'og:description',
      content: 'ELONWU_APP_TITLE',
    },
    {
      property: 'og:image',
      content: '',
    },
    {
      property: 'twitter:card',
      content: 'summary',
    },
    {
      property: 'twitter:site',
      content: 'ELONWU_APP_TITLE',
    },
    {
      property: 'twitter:creator',
      content: 'ELONWU_APP_TITLE',
    },
    {
      property: 'twitter:domain',
      content: 'https://elonwu.site',
    },
  ],

  defines: {
    appName: 'ELONWU_APP_TITLE',
  },

  pwa: true,

  externals: {
    // lodash: ['https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js', '_'],
    // moment: [
    //   'https://cdn.jsdelivr.net/npm/moment@2.29.1/moment.min.js',
    //   'moment',
    // ],
    // react: [
    //   'https://cdn.jsdelivr.net/npm/react@16/umd/react.production.min.js',
    //   'React',
    // ],
    // 'react-dom': [
    //   'https://cdn.jsdelivr.net/npm/react-dom@16/umd/react-dom.production.min.js',
    //   'ReactDOM',
    // ],
    // 'styled-components': [
    //   'https://cdnjs.cloudflare.com/ajax/libs/styled-components/5.2.1/styled-components.min.js',
    //   'styled',
    // ],
    // 'framer-motion': [
    //   'https://cdn.jsdelivr.net/npm/framer-motion@4.1.17/dist/framer-motion.js',
    //   'motion',
    // ],
    // axios: [
    //   'https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js',
    //   'Axios',
    // ],
  },

  devServer: {
    port: 8000,
    disableHostCheck: true,
  },

  DEV_BASEURL: 'http://bi-test.bb.game', // 开发
  TEST_BASEURL: 'https://bi-test.bb.game', // 测试服
  RELEASE_BASEURL: 'https://bi.bb.game', // 正式服
};
