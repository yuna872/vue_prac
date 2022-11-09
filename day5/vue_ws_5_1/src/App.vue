<template>
  <div id="app">
    <h1 style="text-align:center;margin:20px 0px;">Coffee Order App</h1>
    <div class="container">
      <MenuList/>
      <SizeList/>
      <OptionList/>
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
import OptionList from '@/components/OptionList'

export default {
  name: 'App',
  components: {
    MenuList,
    SizeList,
    OrderList,
    OptionList,
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
  font-size : 12px;
  /* justify-content: space-evenly; */
}


</style>
