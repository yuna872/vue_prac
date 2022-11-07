<template>
  <div class="menu-box">
    <div class="menu" @click="selectMenu" :class="{selected: menu.selected}">{{ menu.title }} {{ menu.price }}</div>
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
    color: rgb(24, 24, 24)
    /* text-align: center; */
  }

  .selected{
    background-color: #579062;
    color: white;
  }
</style>