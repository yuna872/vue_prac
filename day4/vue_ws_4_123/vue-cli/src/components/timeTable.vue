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
      // 선택된 시간들을 담을 배열
      timeSelected: [],
    }
  },
  methods: {
    // timeSelected에 선택된 시간 넣기
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
    // App.vue로 시간과 선생님 보내주기
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

    // 선생님 선택하기
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