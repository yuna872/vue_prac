import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {
        title : '아메리카노',
        price : 4500,
        selected: false,
        image: '#'
      },
      {
        title : '카페라떼',
        price : 5100,
        selected: false,
        image: '#'
      },
      {
        title : '자몽허니블랙티',
        price : 5800,
        selected: false,
        image: '#'
      },
    ],
    sizeList: [
      {
        name : 'tall',
        price : 500,
        selected: false,
      },
      {
        name : 'grande',
        price : 1000,
        selected: false,
      },
      {
        name : 'venti',
        price : 1500,
        selected: false,
      },
    ],
  },
  getters: {
    totalOrderCount(state) {
      return state.orderList.length
    },
    totalOrderPrice(state) {
      const totalPrice = state.orderList.reduce((total, element)=>{
        return total + element.menu.price + element.size.price
      }, 0)

      return totalPrice
    }
  },
  mutations: {
    addOrder: function (state) {
      // console.log(state.menuList)
      const selectedMenu = state.menuList.find((menu)=>menu.selected === true)
      const selectedSize = state.sizeList.find((size)=>size.selected === true)
      
      state.orderList.push({menu: selectedMenu, size: selectedSize})
      
      state.menuList.forEach((menu)=>{
        menu.selected = false
      })
      state.sizeList.forEach((size)=>{
        size.selected = false
      })
    },
    updateMenuList: function (state, menuItem) {
      state.menuList = state.menuList.map((menu)=>{
        if (menu === menuItem) {
          menu.selected = true
        } else {
          menu.selected = false
        }
        return menu
      })
      // console.log(state.menuList) 
    },
    updateSizeList: function (state, sizeItem) {
      state.sizeList = state.sizeList.map((size)=>{
        if (size === sizeItem) {
          size.selected = true
        } else {
          size.selected = false
        }
        return size
      })
      // console.log(state.sizeList) 
    },
  },
  actions: {
  },
  modules: {
  }
})