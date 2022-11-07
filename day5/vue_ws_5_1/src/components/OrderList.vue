<template>
  <div>
    <div class="cart-button" @click="addOrder">장바구니 담기</div>
    <div>
      <h3>주문 내역</h3>
      <p>총 {{ totalOrderCount }}건 : {{ totalOrderPrice }}</p>
      <OrderListItem
        v-for="(order, index) in orderList"
        :key="index"
        :order="order"
      />
    </div>
  </div>
</template>

<script>
import OrderListItem from '@/components/OrderListItem'

export default {
  name: 'OrderList',
  components: {
    OrderListItem,
  },
  computed: {
    orderList: function () {
      return this.$store.state.orderList
    },
    totalOrderCount: function () {
      return this.$store.getters.totalOrderCount
    },
    totalOrderPrice: function () {
      return this.$store.getters.totalOrderPrice
    },
  },
  methods:{
    addOrder() {
      this.$store.commit('addOrder')
    }
  }
}
</script>

<style>
  .cart-button{
  background-color: #579062;
  color: white;
  border-radius: 5px;
  height : 35px;
  margin : 15px 0px;
  text-align: center;
}
</style>