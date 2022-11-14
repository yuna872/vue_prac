<template>
  <div class="detail-box">
    <!-- <p>{{ video }}</p> -->
    <iframe 
      id="player" 
      type="text/html" 
      width="640" 
      height="360"
      :src= "videoSrc"
      frameborder="0" v-if="Object.keys(video).length"></iframe>
    <img src="@/assets/noResult.png" v-else>

  </div>
  
</template>

<script>
export default {
  name: 'VideoDetail',
  props: {
    // videoSrc : String,
    video: Object
  },
  computed: {
    videoSrc() {
      if (this.video){
        return `http://www.youtube.com/embed/` + this.video.id.videoId
      } else {
        return ''
      }
    }
  },  
}
</script>

<style>
  .detail-box {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
  }
</style>