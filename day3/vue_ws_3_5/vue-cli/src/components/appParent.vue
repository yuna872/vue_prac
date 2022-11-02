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