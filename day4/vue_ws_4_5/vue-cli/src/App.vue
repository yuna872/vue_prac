<template>
  <div id="app">
    <h1>SSAFY TUBE</h1>
    
    <SearchBar/>
    
    <div style="width:100%">
      <b-row>
        <b-col cols="8" lg="12"><VideoList/></b-col>
        <b-col cols="4" lg="12"><VideoDetail/></b-col>
      </b-row>
    </div>
    
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<script>
import axios from 'axios'

import VideoDetail from '@/components/VideoDetail'
import VideoList from'@/components/VideoList'
import SearchBar from'@/components/SearchBar'

export default {
  name: 'App',
  components: {
    VideoDetail,
    VideoList,
    SearchBar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');
#app {
  font-family: 'Noto Sans KR', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0D6EFD;;
  margin : auto;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border : solid 3px red;
  width : 90%;
}
</style>
