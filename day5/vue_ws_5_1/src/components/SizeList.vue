<template>
  <div class="size-list">
    <h2>2. 사이즈를 고르세요.</h2>
    <SizeListItem
      v-for="(size, index) in sizeList"  
      :key="index"
      :size="size"
      />
  </div>
</template>

<script>
import SizeListItem from '@/components/SizeListItem'

export default {
  name: 'SizeList',
  components:{
    SizeListItem
  },
  methods: {
    onSelectMenu: function () {
      
    },
  },
  computed: {
    sizeList: function () {
      return this.$store.state.sizeList
    },
  },
}
</script>

<style>
  .size-list {
    background-color: white;
    border-radius: 5px;
    flex-grow: 1;
    margin-left : 5px;
  }
</style>