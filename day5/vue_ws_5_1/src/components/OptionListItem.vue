<template>
  <div class="option-box">
    <div class="option">
      <!-- <img src={{ menu.image }}> -->
      <div>{{ option.name }}</div>
      <div style="display:flex;padding:3px;align-items:center;">
        <button class="option-btn" @click="decrease">-</button>
        {{ option.count }}
        <button class="option-btn" @click="increase">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase() {
      this.$store.commit('increase', this.option)
    },
    decrease() {
      this.$store.commit('decrease', this.option)
    },
  },
}
</script>

<style>
  .option-box{
    display: flex;
    flex-direction: column;
  }

  .option {
    border : solid 2px gray;
    margin : 5px;
    border-radius: 5px;
    height : 40px;
    color: rgb(24, 24, 24);
    /* text-align: center; */
    display : flex;
    justify-content: space-between;
    padding : 5px;
    align-items: center;;
  }

  .option-btn {
    display: flex;
    border-radius : 10px;
    padding: 3px;
    width : 15px;
    height : 15px;
    text-align: center;
    align-items: center;
    margin : 5px;
  }
</style>