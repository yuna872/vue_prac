<template>
  <div class="video-detail-box" @click="sendVideo">
    <!-- <h2>VideoListItem</h2> -->
    <!-- `http://www.youtube.com/embed/` + this.selectedVideo.id.videoId -->
    <div><img :src="video.snippet.thumbnails.default.url" alt=""></div>
    <div>{{ video.snippet.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    video : Object,
  },
  methods: {
    sendVideo() {
      this.$emit('send-video', this.video)
    }
  }
}
</script>

<style>
  .video-detail-box{
    display: flex;
    margin : 5px;
    border : rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
  }

  /* .video-detail-box :hover{
    transform: scale(1.1, 1.1);
  } */
  
 
</style>