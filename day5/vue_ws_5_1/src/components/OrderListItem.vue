<template>
    <div class="cart-item">
      <div style="display:flex;align-items:center;"><img class='cart-image' :src="order.menu.image"> {{ order.menu.title }} {{ order.size.name }}</div>
      <div>가격 : {{ order.menu.price }} + {{ order.size.price }} </div>
    </div>
</template>

<script>
// import { threadId } from 'worker_threads';

export default {
  name: 'OrderListItem',
  props: {
    order: Object,
  },
  computed: {
    totalPrice: function () {
      return this.$store.getters.totalOrderPrice
    },
  },
}
</script>

<style>
  .cart-item {
    display: flex;
    justify-content: space-between;
    margin: 10px;
    border-bottom : solid 1px black;
    padding : 10px;
    align-items: center;
    /* border : solid 2px red; */
  }

  .cart-image{
    margin : 5px;
    width : 50px;
    height : 50px;
  }
</style>