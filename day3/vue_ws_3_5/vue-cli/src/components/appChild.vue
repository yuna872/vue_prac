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