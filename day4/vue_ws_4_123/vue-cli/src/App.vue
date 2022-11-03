<template>
  <div id="app">
    <h1>SSFAY 상담 예약 시스템</h1>
    <div class="frame">
      <div class="section">
        <timeTable @get-reservation="getReservation"/>
      </div>
      <div class="section" id="mylist">
        <myList :timeSelected="timeSelected" :teacher="teacher"/>
      </div>
    </div>
  </div>
</template>

<script>
import timeTable from '@/components/timeTable';
import myList from '@/components/myList';

export default {
  name: 'App',
  components: {
    timeTable,
    myList,
  },
  data() {
    return {
      timeSelected : [],
      teacher : ""
    }
  },
  methods: {
    getReservation(timeSelected, teacher) {
      this.timeSelected = timeSelected
      this.teacher = teacher
    }
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');

  #app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #0f4c81; */
  color: #424242;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.frame {
  background-color: white;
  width: 900px;
  /* height: 500px; */
  display: flex;
  box-shadow: 2px 2px 5px black;
  align-items: stretch;
  text-align: center;
  margin-top: 20px;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 20px;
}

#mylist {
  background-color: #DAE4F1;
}

</style>
