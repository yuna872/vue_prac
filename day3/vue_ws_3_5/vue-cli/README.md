### App.vue
```vue
<template>
  <div id="app">
    <h1>App</h1>
    <input type="text" v-model="appData">
    <p>parentData: {{ parentData }}</p>
    <p>childData: {{ childData }}</p>
    <appParent 
      :appData="appData"
      @send-parent-data="getParentData"
      @send-child-data="getChildData"/>
  </div>
</template>

<script>
import appParent from '@/components/appParent';

export default {
  name: 'App',
  components: {
    appParent
  },
  data() {
    return {
      appData: null,
      childData : null,
      parentData : null,
  }
 },
 methods: {
  getChildData(childData){
    this.childData = childData
  },
  getParentData(parentData) {
    this.parentData = parentData
  }
 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border : solid 2px gray;
}
</style>

```
### parentApp.vue
```vue
<template>
  <div>
    <h1>AppParent</h1>
    <input 
      type="text"
      v-model="parentData" 
      @keyup.enter="sendParentData">
    <p>appData : {{ appData }}</p>
    <p>childData : {{ childData }}</p>
    <appChild 
      :parentData="parentData" 
      :appData="appData" 
      @send-child-data="sendChildData"/>
  </div>
</template>

<script>
import appChild from '@/components/appChild';

export default {
  name: 'appParent',
  components: {
    appChild
  },
  data() {
    return {
      parentData : null,
      childData : null
    }
  },
  props: {
    appData: Number,
  },
  methods:{
    sendChildData(childData) {
      this.childData = childData
      this.$emit('send-child-data', childData)
    },
    sendParentData() {
      this.$emit('send-parent-data', this.parentData)
    }
  }
}
</script>

<style>
</style>
```
### childApp.vue
```vue
<template>
  <div>
    <h1>AppChild</h1>
    <input type="text" v-model="childData" @keyup.enter="sendChildData">
    <p>appData : {{ appData }}</p>
    <p>parentData : {{ parentData }}</p>
    <p>childData : {{ childData }}</p>

  </div>
</template>

<script>
export default {
  name: 'appChild',
  data() {
    return {
      childData : null,
    }
  },
  props: {
    parentData: Number,
    appData: Number,
  },
  methods:{
    sendChildData() {
      this.$emit('send-child-data', this.childData)
    }
  }
}
</script>

<style>
</style>
```

### 실행결과
![3-5](3-5.png)