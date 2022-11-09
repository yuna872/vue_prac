<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{ name: 'home' }">홈으로 이동하기</router-link>
    <button @click="toHome">홈으로 이동하기</button>
    <div>
      <input 
      type="text"
      @keyup.enter="goToHello"
      v-model="inputV">
    </div> 
  </div>
</template>


<script>
  export default {
    name: 'AboutView',
    data() {
      return {
        inputV : null,
      }
    },
    methods: {
      toHome() {
        this.$router.push({ name: 'home'})
      },
      goToHello() {
        this.$router.push({ name: 'hello', params:{ userName : this.inputV }})
      }
    }
  }
</script>