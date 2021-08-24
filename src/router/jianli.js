const jianli = [
  {
    path: '/jianli/xsy',
    name: 'jianliXsy',
    component: () => import(/* webpackChunkName: "about" */ '../views/jianli/xsy.vue')
  },
  {
    path: '/jianli/dq',
    name: 'jianliDq',
    component: () => import(/* webpackChunkName: "about" */ '../views/jianli/dq.vue')
  }
]
export default jianli