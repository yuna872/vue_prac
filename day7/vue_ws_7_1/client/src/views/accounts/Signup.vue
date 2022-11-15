<template>
  <div>
    <h1>Sign Up Page</h1>
    <form @submit.prevent="signUp">
      <label for="username">username : </label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password"> password : </label>
      <input type="password" id="password" v-model="password"><br>

      <label for="password2"> password confirmation : </label>
      <input type="password" id="password2" v-model="password2">
      
      <input type="submit" value="SignUp">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'Singup',
  data: function () {
    return {
      username: null,
      password: null,
      password2: null,
      token: null,
    }
  },
  methods: {
    signUp() {
      const username = this.username
      const password = this.password
      const password2 = this.password2

      axios({
        method : 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          username,
          password,
          password2,
        }
      })
      .then((res)=>{
        this.token = res.data.key
        // 로컬 스토리지에 'jwt'라는 이름으로 토큰 저장
        localStorage.setItem('jwt', JSON.stringify(this.token))

        this.$router.push({name : 'Login'})
      })
      .catch((error)=>{console.log(error)})

    }
  }
}
</script>
