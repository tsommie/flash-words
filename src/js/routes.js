export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/verbs',
    name: 'verbs',
    component: () => import('../pages/Verbs.vue')
  }
];