<template>
  <div>
    <h1>LogIn Page</h1>
    <form @submit.prevent="login">
      <label for="username">username : </label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password"> password : </label>
      <input type="password" id="password" v-model="password"><br>

      <input type="submit" value="logIn">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'


export default {
  name: 'Login',
  data: function () {
    return {}
  },
  methods: {
    login: function () {
      axios({
        method : 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username,
          password,
        }
      })
      .then((res)=>{
        // 이벤트 emit
        this.$emit('login')
        // 할일 목록이 있는 페이지로 이동
      })
      .catch((error)=>{console.log(error)})
    }
  }
}
</script>
