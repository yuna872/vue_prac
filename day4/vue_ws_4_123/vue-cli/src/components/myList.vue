<template>
  <div id="listPage">
    <h2>상담 신청 현황</h2>
    <div class="mini-box">
      <h3>상담 선생님</h3>
      <p>성함 : {{ teacher }}</p>
    </div>
    <div class="mini-box">
      <h3>예약 현황</h3>
      <div></div>
      <p>시간들 : <span v-for="(time, index) in timeSelected" :key="index" > {{ time }} </span></p>
    </div>
    <div id="logo-box">
      <img id="logo" src="../assets/ssafy-logo.png"> 
    </div>
  </div>
</template>

<script>
export default {
  name : 'myList',
  props: {
    timeSelected: Array,
    teacher : String,
  }
}
</script>

<style>

  #listPage {
    /* width : 450px; */
    background-color: #DAE4F1;
    /* background-color: #0F4C81;
    background-color: #658DC63D;
    background-color: #84898C;
    background-color: #424242; */

  }

  .mini-box {
    width : 350px;
    border-bottom : solid 2px #0f4c81;
    margin : auto;
  }

  #logo-box {
    margin-top : 50px;
  }
</style>