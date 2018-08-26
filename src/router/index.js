import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const Index = () => import('../views/index')
const Load = () => import('../views/load')
const Credit = () => import('../views/credit')
const Mine = () => import('../views/mine')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/load',
      name: 'load',
      component: Load
    },
    {
      path: '/credit',
      name: 'credit',
      component: Credit
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }

  ]
})
