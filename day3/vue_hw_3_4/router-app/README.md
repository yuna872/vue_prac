### index.js
```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '@/views/First.vue'
import Second from '@/views/Second.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'first',
    component: First
  },
  {
    path: '/second',
    name: 'second',
    component: Second
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

```
### App.vue
```javascript
<template>
  <div id="app">
    <nav>
      <router-link to="/">First</router-link> |
      <router-link to="/second">Second</router-link>
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
### First.vue
```javascript
<template>
  <div class="first">
    <h1>첫 번째 페이지입니다.</h1>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'first',
  components: {
    HelloWorld
  }
}
</script>

```
### Second.vue
```javascript
<template>
  <div class="second">
    <h1>두 번째 페이지입니다.</h1>
  </div>
</template>

<script>

export default {
  name: 'second',
}
</script>
```