<template>
  <div>
    <h1>로또</h1>
    <button @click="getLuckyNumbers">Get Lucky Numbers</button>
    <p>{{ luckyNums }}</p>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name : 'TheLotto',
  data() {
    return{
      luckyNums : null,
      size: this.$route.params.size,
    } 
  },
  methods: {
    getLuckyNumbers() {
      this.luckyNums = _.sampleSize(_.range(1, 46), this.size)
    }
  }

}
</script>

<style>

</style>