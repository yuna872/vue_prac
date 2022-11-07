<template>
  <div class="size-box">
    <div class="size" @click="selectSize" :class="{selected:size.selected}">{{ size.name }} {{ size.price }}</div>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
  methods:{
    selectSize() {
      this.$store.commit('updateSizeList', this.size)
    }
  }
}
</script>

<style>
  .size-box{
    display: flex;
    flex-direction: column;
  }

  .size {
    border : solid 2px gray;
    margin : 5px;
    border-radius: 5px;
    height : 40px;
    color: rgb(24, 24, 24)
    /* text-align: center; */
  }

  .selected{
    background-color: #579062;
    color: white;
  }
</style>