import Layout from '@/layout/Global';

const routes = [
  {
    path: '/',
    component: Layout,

    routes: [
      {
        path: '/',
        exact: true,
        redirect: '/bi',
      },

      {
        path: '/gm',
        routes: [
          {
            path: '/gm',
            exact: true,
            redirect: '/gm/announcement',
          },
          {
            path: '/gm/announcement',
            title: '公告',
            component: '/GM/Announcement',
            key: 'announcement',
          },
        ],
      },
      {
        path: '/bi',
        routes: [
          {
            path: '/bi',
            exact: true,
            redirect: '/bi/overview',
          },

          {
            path: '/bi/overview',
            title: '主页',
            component: '/BI/Overview',
            key: 'overview',
          },
        ],
      },
    ],
  },
  {
    // path: '*',
    component: '/page404',
    title: '404',
  },
];

export default routes;
