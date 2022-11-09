<template>
  <div class="first">
    <h1>첫 번째 페이지입니다.</h1>
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'first',
  components: {
    HelloWorld
  }
}
</script>
