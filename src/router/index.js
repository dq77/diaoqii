import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import jianli from './jianli'

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  }
]
routes = routes.concat(jianli)

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
