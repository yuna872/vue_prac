<template>
  <div class="container">
    <h2>시작</h2>
    <div class="box-bottom">
      <i class="bi bi-arrow-left-circle-fill" @click="goHome"></i>
      <div><img src="@/assets/happeed.png"></div>
      <i class="bi bi-arrow-right-circle-fill" @click=""></i>
    </div>
    <h3>해피드</h3>
  </div>
</template>

<script>
export default {
  name : 'happeed',
  methods: {
    goHome() {
      this.$router.push({name : 'home'})
    }
  }
}
</script>

<style>

  .container {
    width : 500px;
    height : 500px;
    margin : 30px auto;
    box-shadow: rgba(50, 50, 93,0.25) 0px 6px 12px -2px;
    display: flex;
    flex-direction: column;
    /* border : solid 2px red; */
    align-items: stretch;
  }

  img {
    width : 300px;
    height : 300px;
  }

  .box-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin : 30px;
    /* border : solid 2px red; */
  }

</style>