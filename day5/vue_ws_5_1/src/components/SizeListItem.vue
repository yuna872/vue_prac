<template>
  <div class="size-box">
    <div class="size" @click="selectSize" :class="{selected:size.selected}">
      <div>{{ size.name }}</div>
      <div>{{ size.price }}</div>
    </div>
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
    color: rgb(24, 24, 24);
    /* text-align: center; */
    display: flex;
    padding : 10px;
    justify-content: space-between;
    align-items: center;
  }

  .selected{
    background-color: #579062;
    color: white;
  }
</style>