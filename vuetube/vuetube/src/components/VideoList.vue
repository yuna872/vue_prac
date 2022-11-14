<template>
  <div class="list-box">
    <VideoListItem 
      v-for="video in videos"
      :key=video.id.videoId
      :video=video
      @send-video="sendVideo"
    />
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem';

export default {
    name: "VideoList",
    components: { VideoListItem },
    props: {
      videos : Array,
    },
    methods: {
      sendVideo(video) {
        this.$emit('get-video', video)
      }
    }
  }
</script>

<style>
 .list-box {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
 }
</style>