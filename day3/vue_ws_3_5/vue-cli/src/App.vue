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
