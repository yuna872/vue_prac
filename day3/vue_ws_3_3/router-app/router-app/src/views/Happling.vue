<template>
  <div class="container">
    <h2>1단계</h2>
    <div class="box-bottom">
      <i class="fa-solid fa-circle-chevron-left fa-lg" @click="goPrePage"></i>
      <div><img src="@/assets/happling.png"></div>
      <i class="fa-solid fa-circle-chevron-right fa-lg" @click="goNextPage"></i>
    </div>
    <h3>해플링</h3>
  </div>
</template>

<script>
export default {
  name : 'happling',
  computed: {
   
  },
  methods: {
    goPrePage() {
      this.$router.push({name: 'happeed'})
    },
    goNextPage() {
      this.$router.push({name: 'happlossome'})
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