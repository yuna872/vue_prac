<template>
  <div id="app">
    <h1>SSAFY TUBE</h1>
    <!-- 동영상 출력하려면 동영상의 정보 필요 -->
    <div v-if = isSelected>
      <iframe 
      id="player" 
      type="text/html" 
      width="640" 
      height="360"
      :src= "videoSrc"
      frameborder="0"></iframe>
    </div>
    <div style="width:600px;height:40px;text-align:center;box-shadow: 2px 2px 2px gray;border-radius:5px; margin:10px auto;">
      {{videoTitle}}
    </div>
    
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      selectedVideo: '',
      videoTitle: '',
    }
  },
  methods : {
    isSelected: function () {
      return Object.keys(this.selectedVideo).length
    }
  },
  computed: {
    videoSrc() {
      if (this.isSelected()){
        return `http://www.youtube.com/embed/` + this.selectedVideo.id.videoId
      } else {
        return ''
      }
    }
  },  
  created: function() {
    axios({
      method : 'get',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: process.env.VUE_APP_YOUTUBE_API_KEY,
        q: '코딩노래',
        type : 'video',
        part : 'snippet',
      }
    })
    .then((res)=>{
      this.selectedVideo = res.data.items[0]
      this.videoTitle = this.selectedVideo.snippet.title
    })
    .catch((error)=>{console.log(error)})
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
