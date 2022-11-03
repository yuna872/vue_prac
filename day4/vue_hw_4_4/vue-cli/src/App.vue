<template>
  <div id="app">
    <h1>캐릭터 진화 단계 가이드</h1>
    <div>
      <button @click="goHome">HOME</button>
      <button @click="letsStart">Start</button>
    </div>
    <HomePage v-if="isStarted===false"/>
    <nonColor 
      @go-back-page="goBackPage"
      @go-next-page="goNextPage"
      v-else-if="isStarted===true & dataNumber===1"/>
    <ssafLeaf 
      @go-back-page="goBackPage"
      @go-next-page="goNextPage"  
      v-else-if="isStarted===true & dataNumber===3"/>
    <ssaFling 
      @go-back-page="goBackPage"
      @go-next-page="goNextPage"  
      v-else-if="isStarted===true & dataNumber===2"/>
    <ssaFlower 
      @go-back-page="goBackPage"
      @go-next-page="goNextPage"
      v-else-if="isStarted===true & dataNumber===4"/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import nonColor from '@/components/nonColor';
import ssafLeaf from '@/components/ssafLeaf';
import ssaFling from '@/components/ssaFling';
import ssaFlower from '@/components/ssaFlower';


export default {
  name: 'App',
  components: {
    HomePage,
    ssafLeaf,
    ssaFlower,
    nonColor,
    ssaFling,
  },
  data() {
    return{
      dataNumber : 1,
      isStarted: false,
    }
  },
  methods: {
    goHome() {
      this.isStarted = false
    },
    letsStart() {
      this.isStarted = !this.isStarted
      console.log('시작버튼')
    },
    goNextPage() {
      if (this.dataNumber===4) {
        alert('Home으로 돌아갑니다!')
        this.dataNumber = 1
        this.isStarted = false
      } else {
        this.dataNumber += 1
        console.log(this.dataNumber)
      }
    },
    goBackPage() {
      if (this.dataNumber===1) {
        this.isStarted = false
      } else {
        this.dataNumber -= 1
      }
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: auto;
  display: flex;
  /* border: solid 2px red; */
  flex-direction: column;
}

button {
  background-color: white;
  border: solid 2px orange;
  width : 100px;
  height : 50px;
  margin : 0 20px 0 20px;
}

h1 {
  margin: 30px 0 30px 0;
}
</style>
