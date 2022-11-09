<template>
  <div class="menu-box">
    <div class="menu" @click="selectMenu" :class="{selected: menu.selected}">
      <!-- <img src={{ menu.image }}> -->
      <div><img :src="menu.image"></div>
      <div>{{ menu.title }}</div>
      <div>{{ menu.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
  methods: {
    selectMenu() {
      this.$store.commit('updateMenuList', this.menu)
    }
  }
}
</script>

<style>
  .menu-box{
    display: flex;
    flex-direction: column;
  }

  .menu {
    border : solid 2px gray;
    margin : 5px;
    border-radius: 5px;
    height : 40px;
    color: rgb(24, 24, 24);
    /* text-align: center; */
    display : flex;
    justify-content: space-between;
    padding : 5px;
    align-items: center;
  }

  .selected{
    background-color: #579062;
    color: white;
  }

  img {
    width : 30px;
    height : 30px;
    border-radius: 5px;
  }
</style>