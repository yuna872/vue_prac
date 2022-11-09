import Vue from 'vue'
import VueRouter from 'vue-router'
import TheLunch from '@/views/TheLunch'
import TheLotto from '@/views/TheLotto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/lunch',
    name: 'lunch',
    component: TheLunch
  },
  {
    path: '/lotto/:size',
    name: 'lotto',
    component: TheLotto
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
