<template>
  <li>
    {{ order.menu.title }} {{ order.size.name }} => {{ order.menu.price}} + {{ order.size.price }} 
  </li>
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
</style>