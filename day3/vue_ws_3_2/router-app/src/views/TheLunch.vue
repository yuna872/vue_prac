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