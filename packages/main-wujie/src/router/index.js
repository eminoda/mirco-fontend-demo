import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    // {
    //   path: '',
    //   redirect: '/wujie-home',
    // },
    {
      path: '/wujie-home',
      component: () => import('@/views/HomeView'),
    },
    {
      path: '/subApp/:appName',
      component: () => import('@/views/SubLayout'),
    },
  ],
})
