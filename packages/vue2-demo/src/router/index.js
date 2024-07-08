import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '',
      redirect: '/page1',
    },
    {
      path: '/page1',
      component: () => import('@/views/PageView1'),
    },
    {
      path: '/page2',
      component: () => import('@/views/PageView2'),
    },
  ],
})
