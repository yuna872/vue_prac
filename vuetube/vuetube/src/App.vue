<template>
  <div id="app">
    <h1>My First Youtube Project</h1>
    <TheSearchBar
      @get-input="searchInputData"
    />
    <div class="row">
      <div class="col">
        <VideoDetail :video='selectedVideo'/></div>
      <div class="col">
        <VideoList 
          :videos='videos'
          @get-video ="getVideo"
        />
      </div>
    </div>
    
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<script>
import axios from 'axios'
import TheSearchBar from '@/components/TheSearchBar';
import VideoList from '@/components/VideoList';
import VideoDetail from '@/components/VideoDetail';

export default {
  name: 'App',
  data() {
    return {
      selectedVideo: '',
      videos : [],
      searchV : ''
    }
  },
  components: {
    TheSearchBar,
    VideoList,
    VideoDetail,
  },  
  methods: {
    getVideo(video){
      this.selectedVideo = video
    },
    searchInputData(inputV){
      this.searchV = inputV
      console.log(inputV)
      axios({
          method: 'get',
          url:'https://www.googleapis.com/youtube/v3/search',
          params: {
            // AIzaSyBtzvq4ne16mO7ORNtVmr6vrBrXST93SyU
            key: 'AIzaSyCnBiB8U40mXuaqkZ7RXEb4towm0Xqjawk',
            q: this.searchV,
            type : '싸피',
            part : 'snippet',
            maxResults:5
          } 
        })
        .then((response)=>{
          // detail
          this.selectedVideo = response.data.items[0]
          // list
          this.videos = response.data.items
        })
        .catch((error)=>{console.log(error)})
    }
  },
  
  created: function () {
    axios({
          method: 'get',
          url:'https://www.googleapis.com/youtube/v3/search',
          params: {
            key: 'AIzaSyCnBiB8U40mXuaqkZ7RXEb4towm0Xqjawk',
            q: '싸피',
            type : 'video',
            part : 'snippet',
          } 
        })
        .then((response)=>{
          // this.selectedVideo = response.data.items[0]
          this.videos = response.data.items
          // this.videoTitle = this.selectedVideo.snippet.title
        })
        .catch((error)=>{console.log(error)})
    
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
  margin-top: 60px;
}

.grid-box {
  width : 80%;
  margin : 40px auto;
}
</style>
