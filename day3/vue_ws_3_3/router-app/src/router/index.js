import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Happeed from '@/views/Happeed'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/happeed',
    name: 'happeed',
    component: Happeed
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
