import GlobalLayout from '@/layout/Global';

const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/main',
  },

  {
    path: '/main',
    component: GlobalLayout,
    routes: [
      {
        path: '/main',
        exact: true,
        redirect: '/main/page1',
      },
      {
        path: '/main/page1',
        title: 'page1',
        component: '/Page1',
        key: 'test1',
      },

      {
        redirect: '/404',
      },
    ],
  },

  {
    path: '/404',
    title: '404',
    component: '/Page404',
    key: '404',
  },

  {
    redirect: '/404',
  },
];

export default routes;
