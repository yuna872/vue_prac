<template>
  <div>
    <input type="text" v-model="inputV" @keyup.enter="sendInput">
  </div>
</template>

<script>
export default {
  name : 'TheSearchBar',
  data() {
    return {
      inputV : '',
    }
  },
  methods: {
    sendInput() {
      this.$emit('get-input', this.inputV)
      this.inputV = ''
    }
  }
}
</script>

<style>
  input {
    width : 80%;
    margin-bottom : 40px;
    height : 30px;
  }
</style>