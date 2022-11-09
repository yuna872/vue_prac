import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Happeed from '@/views/Happeed'
import Happling from '@/views/Happling'
import Happlossome from '@/views/Happlossome'
import Happlower from '@/views/Happlower'
import NotFound from '@/views/NotFound'


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
  {
    path: '/happling',
    name: 'happling',
    component: Happling
  },
  {
    path: '/happlossome',
    name: 'happlossome',
    component: Happlossome
  },
  {
    path: '/happlower',
    name: 'happlower',
    component: Happlower
  },
  {
    path : '/notfound',
    name: 'notfound',
    component: NotFound
  },
  {
    path : '*',
    redirect : '/notfound'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
