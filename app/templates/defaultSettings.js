const APP_KEY = `%ELONWU%`;

module.exports = {
  title: APP_KEY,

  favicon: 'favicon.png',
  description: APP_KEY,
  keywords: ['ElonWu', `%${APP_KEY}%'`],
  shareOptions: [
    {
      property: 'og:title',
      content: APP_KEY,
    },

    {
      property: 'og:site_name',
      content: APP_KEY,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: APP_KEY,
    },
    {
      property: 'og:description',
      content: APP_KEY,
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
      content: APP_KEY,
    },
    {
      property: 'twitter:creator',
      content: APP_KEY,
    },
    {
      property: 'twitter:domain',
      content: 'https://elonwu.site',
    },
  ],

  defines: {
    appName: APP_KEY,
  },

  pwa: true,

  externals: {
    lodash: ['https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js', '_'],
    moment: [
      'https://cdn.jsdelivr.net/npm/moment@2.29.1/moment.min.js',
      'moment',
    ],
    react: [
      'https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js',
      'React',
    ],
    'react-dom': [
      'https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js',
      'ReactDOM',
    ],
    axios: [
      'https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js',
      'Axios',
    ],

    'react-hook-form': [
      'https://cdn.jsdelivr.net/npm/react-hook-form@7.15.4/dist/index.umd.min.js',
      'reactHookForm',
    ],

    '@antv/data-set': [
      'https://cdn.jsdelivr.net/npm/@antv/data-set@0.11.8/build/data-set.min.js',
      'DataSet',
    ],
    '@antv/g2': [
      'https://cdn.jsdelivr.net/npm/@antv/g2@4.1.21/lib/index.min.js',
      'G2',
    ],
    '@antv/g6': [
      'https://cdn.jsdelivr.net/npm/@antv/g6@4.3.8/lib/index.min.js',
      'G6',
    ],

    '@emotion/react': [
      'https://cdn.jsdelivr.net/npm/@emotion/react@11.4.1/dist/emotion-react.cjs.min.js',
    ],
    '@emotion/styled': [
      'https://cdn.jsdelivr.net/npm/@emotion/styled@11.3.0/dist/emotion-styled.cjs.min.js',
    ],
  },

  devServer: {
    port: 8000,
    disableHostCheck: true,
  },

  DEV_BASEURL: 'http://bi-test.bb.game', // 开发
  TEST_BASEURL: 'https://bi-test.bb.game', // 测试服
  RELEASE_BASEURL: 'https://bi.bb.game', // 正式服
};
