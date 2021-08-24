import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cate from '../views/Cate.vue'
import User from '../views/User.vue'
import jianli from './jianli'

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cate',
    name: 'Cate',
    component: Cate
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]
routes = routes.concat(jianli)

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
