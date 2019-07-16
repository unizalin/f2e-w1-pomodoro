import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('./views/Todo.vue')
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('./views/analytics.vue')
    },
    {
      path: '/ringtones',
      name: 'ringtones',
      component: () => import('./views/ringtones.vue')
    }
  ]
})
