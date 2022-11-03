<template>
  <div id="container">
    <h2>시작</h2>
    <div id="box">
    <div class='btn' id="left-btn">
      <span>
        <i 
        class="fa-solid fa-circle-chevron-left fa-2x"
        @click="goBackPage"></i>
      </span>
    </div>
    <div id="imgBox">
      <img src="../assets/ssanocolor.png">
    </div>
    <div class='btn' id="right-btn">
      <span>
        <i 
        class="fa-solid fa-circle-chevron-right fa-2x"
        @click="goNextPage" 
        ></i>
      </span>
    </div>
  </div>
  <h2>싸플링(무색)</h2>
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
  flex-direction: column;
  padding: 20px 0px;
  justify-content: center;

  /* border : solid 2px red; */
}
#box{
  width : 700px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border : solid 2px red; */
}

img {
  width : 200px;
  height : 200px;
}
.btn {
  display: flex;
  align-content: center;
  align-items: center;
}

</style>