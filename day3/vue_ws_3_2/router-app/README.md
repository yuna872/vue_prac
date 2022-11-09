### TheLotto.vue
```javascript
<template>
  <div>
    <h1>로또</h1>
    <button @click="getLuckyNumbers">Get Lucky Numbers</button>
    <p>{{ luckyNums }}</p>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name : 'TheLotto',
  data() {
    return{
      luckyNums : null,
      size: this.$route.params.size,
    } 
  },
  methods: {
    getLuckyNumbers() {
      this.luckyNums = _.sampleSize(_.range(1, 46), this.size)
    }
  }

}
</script>

<style>

</style>
```
### TheLunch.vue
```javascript
<template>
  <div>
    <h1>점심메뉴</h1>
    <button @click="pickLunch">Pick Lunch</button>
    <p>{{ todayMenu }}</p>
    <h2>로또를 뽑아보자</h2>
    <button @click="toLotto">Pick Lotto</button>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'TheLunch',
  data() {
    return {
      menus : ['국밥', '카레', '샌드위치', '파스타'],
      todayMenu : null,
    }
  },
  methods:{
    toLotto() {
      this.$router.push({name:'lotto'})
    },
    pickLunch() {
      this.todayMenu = _.sample(this.menus, 1)
    }
  }
}
</script>

<style>
  h2 {
    margin-top : 80px;
  }
</style>
```
### App.vue
```javascript
<template>
  <div id="app">
    <nav>
      <router-link :to="{name:'lunch'}">Lunch</router-link> |
      <router-link :to="{name:'lotto', params:{size:6}}">Lotto</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

```
### index.js
```javascript
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

```