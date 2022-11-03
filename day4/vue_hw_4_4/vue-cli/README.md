### App.vue
```javascript
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

```
### Home.vue
```javascript
<template>
  <img class="img-box" src="../assets/ssafy-banner.png">
</template>

<script>
export default {
  name: 'homePage',
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
.img-box {
  width : 800px;
  height : 500px;
  box-shadow: 5px 5px 10px gray;
  margin: 50px auto auto auto;
}

/* img {
  width : 100%;
  height : 100%;
} */
</style>
```
### noncolor.vue
```javascript
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
```
### ssafling.vue
```javascript
<template>
  <div id="container">
    <h2>1단계</h2>
    <div id="box">
    <div class='btn' id="left-btn">
      <span>
        <i 
        class="fa-solid fa-circle-chevron-left fa-2x"
        @click="goBackPage"></i>
      </span>
    </div>
    <div id="imgBox">
      <img src="../assets/saffling.png">
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
  <h2>싸플링</h2>
</div>
</template>

<script>
export default {
  name: 'ssaFling',
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
```
### ssafleaf.vue
```javascript
<template>
  <div id="container">
    <h2>2단계</h2>
    <div id="box">
    <div class='btn' id="left-btn">
      <span>
        <i 
        class="fa-solid fa-circle-chevron-left fa-2x"
        @click="goBackPage"></i>
      </span>
    </div>
    <div id="imgBox">
      <img src="../assets/ssafleaf.png">
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
  <h2>싸플리프</h2>
</div>
</template>

<script>
export default {
  name: 'ssafLeaf',
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
```
### ssaflower.vue
```javascript
<template>
  <div id="container">
    <h2>3단계</h2>
    <div id="box">
    <div class='btn' id="left-btn">
      <span>
        <i 
        class="fa-solid fa-circle-chevron-left fa-2x"
        @click="goBackPage"></i>
      </span>
    </div>
    <div id="imgBox">
      <img src="../assets/ssaflower.png">
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
  <h2>싸플라워</h2>
</div>
</template>

<script>
export default {
  name: 'ssaFlower',
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
```