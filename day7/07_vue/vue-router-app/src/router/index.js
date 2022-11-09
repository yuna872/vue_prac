import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView'
import LoginView from '@/views/LoginView'
import NotFound404 from '@/views/NotFound404'
import DogView from '@/views/DogView'

Vue.use(VueRouter)

const isloggedIn = true

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // lazy-loading 방식
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    // 이동할 URL - 동적인자앞에 콜론 입력하기
    path: '/hello/:userName',
    name: 'hello',
    // 매핑할 컴포넌트
    component : HelloView
  },
  {
    // 이동할 URL - 동적인자앞에 콜론 입력하기
    path: '/login',
    name: 'login',
    // 매핑할 컴포넌트
    component : LoginView,
    beforeEnter(to, from, next) {
      if (isloggedIn === true) {
        console.log('이미 로그인 되어있습니다.')
        next({ name: 'home'})
      } else {
        // 인자가 없으면 to로 이동
        next()
      }
    }
  },
  {
    path: '/404',
    name: 'NotFound404',
    component : NotFound404
  },
  {
    path : '/dog/:breed',
    name : 'dog',
    component : DogView
  },
  {
    path: '*',
    redirect : '/404'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// router.beforeEach((to, from ,next) =>{
//   const isloggedIn = false

//   const authPages = ['hello']

//   const isAuthRequired = authPages.includes(to.name)

//   if (isAuthRequired && !isloggedIn) {
//     console.log('login으로 이동!')
//     next({name : 'login'})
//   } else {
//     console.log('to로 이동!')
//     next()
//   }
// })


export default router
