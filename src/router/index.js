import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component : () => import('@/components/layouts/Index.vue'),
    children  : [
      {
        name : 'FetchView',
        path : '/fetch',
        component: () => import('@/views/FetchView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
