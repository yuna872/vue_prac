<template>
  <div class="listbox">
    리스트 페이지
    <VideoListItem/>
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem';

export default {
  name:'VideoList',
  components: {
    VideoListItem,
  }
}
</script>

<style>
  .listbox {
    box-shadow: 3px 3px 10px gray;
  }
</style>