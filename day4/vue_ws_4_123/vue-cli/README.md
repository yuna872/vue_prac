### App.vue
```vue
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

```


### timeTable.vue
```vue
<template>
  <div>
    <h2>예약 페이지</h2>
    <div class="box-top">
      <h3>선생님 선택</h3>
      <button @click="ericSelected" :class="{selected:teacher==='Eric'}">Eric</button>
      <button @click="tonySelected" :class="{selected:teacher==='Tony'}">Tony</button>
    </div>
    <div class="box-bottom">
      <h3>시간 선택</h3>
      <div class="timetable">
        <div 
          class="time" 
          v-for="(time, index) in times" 
          :key="index" 
          @click="addToReservation(time)"
          :class="{selected:timeSelected.includes(time)}">{{ time }}</div>
      </div>
      <button @click="sendReservation" :class="{selected:timeSelected.length===0}">예약 확정</button>
    </div>
  </div>
</template>

<script>

export default {
  name : 'timeTable',
  data() {
    return {
      teacher : "",
      times: [
        "09:00","09:30","10:00","10:30","11:00","11:30",
        "12:00","12:30","13:00","13:30","14:00","14:30",
        "15:00","15:30","16:00","16:30","17:00","17:30",
      ],
      timeSelected: [],
    }
  },
  methods: {
    addToReservation(time) {
      // 다시 한번 눌렀을 때는 배열에서 제거
      if (this.timeSelected.includes(time)) {
        this.timeSelected.splice(this.timeSelected.indexOf(time), 1)
      } else if (this.timeSelected.length === 5) {
        alert('5타임까지만 신청할 수 있습니다.')
      } else {
        this.timeSelected.push(time)
      }
    },
    sendReservation() {
      if (this.teacher === "") {
        alert('선생님을 선택해 주세요!')
        return
      }
      if (this.timeSelected.length === 0){
        alert('시간을 선택해 주세요!')
        return
      }
      this.$emit('get-reservation', this.timeSelected.sort(), this.teacher)
      this.timeSelected = []
      this.teacher = ""
    },
    ericSelected() {
      this.teacher = "Eric"
      console.log(this.teacher)
    },
    tonySelected() {
      this.teacher = "Tony"
      console.log(this.teacher)
    }
  }
}
</script>

<style>
  
  button {
    background-color: white;
    border : solid 2px #2c3e50;
    width : 80px;
    height : 40px;
    margin : 20px;
  }

  .box-top{
    border-bottom : solid 2px #2c3e50;
    width : 350px;
    margin : auto;
  }

  .box-bottom {
    width : 400px;
    /* border : solid 2px red; */
  }

  .timetable {
    width : 400px;
    display: flex;
    flex-wrap: wrap;
    /* border : solid 2px red; */
  }

  .time {
    width : 65px;
  }

  .selected {
    background-color: #DAE4F1;
  }

</style>
```


### myList.vue
```vue
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
```
### 실행결과
![4-3](4-3.png)