<template>
  <div id="app">
    <h1>Coffee Order App</h1>
    <div class="container">
      <MenuList/>
      <SizeList/>
    </div>
    <div>
      <OrderList/> 
    </div>
    
    
  </div>
</template>

<script>
import MenuList from '@/components/MenuList'
import SizeList from '@/components/SizeList'
import OrderList from '@/components/OrderList';

export default {
  name: 'App',
  components: {
    MenuList,
    SizeList,
    OrderList,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

.container {
  display: flex;
  background-color: rgb(232, 232, 232);
  padding : 15px;
  border-radius: 5px;
  /* justify-content: space-evenly; */
}


</style>
