<template>
  <div id="app">
    <h1>SSAFY TUBE</h1>
    
    <SearchBar @send-input-data="searchInputData"/>
    
    <b-container class="grid-box">
      <b-row class="row">
        <b-col class="col" cols="11" lg="7"><VideoList :videos='videos'/></b-col>
        <b-col class="col" cols="11" lg="5"><VideoDetail :selectedVideo='selectedVideo'/></b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<script>
// import axios from 'axios'

import VideoDetail from '@/components/VideoDetail'
import VideoList from'@/components/VideoList'
import SearchBar from'@/components/SearchBar'

export default {
  name: 'App',
  data() {
    return {
      inputData : '빠더너스',
      selectedVideo : '',
      videos : [],
    }
  },
  components: {
    VideoDetail,
    VideoList,
    SearchBar,
  },
  methods: {
    searchInputData(inputV) {
      this.inputData = inputV
      axios({
        method : 'get',
        url : 'https://www.googleapis.com/youtube/v3/search',
        params: {
          // AIzaSyBtzvq4ne16mO7ORNtVmr6vrBrXST93SyU
          key: 'AIzaSyCnBiB8U40mXuaqkZ7RXEb4towm0Xqjawk',
          q: this.inputData,
          type : 'video',
          part : 'snippet',
          maxResults: 5
        } 
      })
      .then((response)=>{
          // detail
          this.selectedVideo = response.data.items[0]
          // list
          this.videos = response.data.items
          console.log(this.videos)
          console.log(this.selectedVideo)
        })
        .catch((error)=>{console.log(error)})
    }
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
}
.grid-box {
  display: flex;
  align-items: center;
  align-content: center;
  margin : 20px;
}
.row {
  width : 100%;
}
.col {
  margin : auto;
}

</style>
