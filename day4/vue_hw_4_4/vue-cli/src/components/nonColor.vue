<template>
  <div id="container">
    <div id="box">
    <div class='btn' id="left-btn">
      <i 
        class="fa-solid fa-circle-chevron-left fa-2x"
        @click="goBackPage"></i>
    </div>
    <div id="imgBox">
      <img src="../assets/ssanocolor.png">
    </div>
    <div class='btn' id="right-btn">
      <i 
        class="fa-solid fa-circle-chevron-right fa-2x"
        @click="goNextPage" 
        ></i>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'nonColor',
  methods: {
    goNextPage() {
      this.$emit('go-next-page')
    },
    goBackPage() {
      this.$emit('go-back-page')
    }
  }
}
</script>

<style>
#container {
  width : 800px;
  height : 500px;
  box-shadow: 5px 5px 10px gray;
  margin: 50px auto auto auto;
  display: flex;
  flex-direction: row;
}
#box{
  width : 700px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

img {
  width : 200px;
  height : 200px;
}
.btn {
  display: flex;
  flex-direction: row;
}
i {
  padding: 0px;
  border: solid 2px red;
}
</style>