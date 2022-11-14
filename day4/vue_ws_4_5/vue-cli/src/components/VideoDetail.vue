<template>
  <div class="detailbox">
    {{ selectedVideo }}
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: {
    selectedVideo : Object,
  }
}
</script>

<style>
  .detailbox {
      box-shadow: 3px 3px 10px gray;
    }
</style>