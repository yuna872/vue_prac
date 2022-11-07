### MenuList, MenuListItem
```javascript
<template>
  <div class="menu-list">
    <h2>1. 음료를 고르세요.</h2>
    <MenuListItem
      v-for="(menu, index) in menuList"
      :key="index"
      :menu="menu"     
    />
  </div>
</template>

<script>
import MenuListItem from '@/components/MenuListItem'

export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    menuList: function () {
      return this.$store.state.menuList
    },
  },
  methods: {
    selectMenu: function () {
     
    },
  },
}
</script>

<style>
  .menu-list {
    background-color: white;
    border-radius: 5px;
    flex-grow: 1;
    margin-right : 5px;
  }
</style>
```
```javascript
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
```


### SizeList, SizeListItem
```javascript
<template>
  <div class="size-list">
    <h2>2. 사이즈를 고르세요.</h2>
    <SizeListItem
      v-for="(size, index) in sizeList"  
      :key="index"
      :size="size"
      />
  </div>
</template>

<script>
import SizeListItem from '@/components/SizeListItem'

export default {
  name: 'SizeList',
  components:{
    SizeListItem
  },
  methods: {
    onSelectMenu: function () {
      
    },
  },
  computed: {
    sizeList: function () {
      return this.$store.state.sizeList
    },
  },
}
</script>

<style>
  .size-list {
    background-color: white;
    border-radius: 5px;
    flex-grow: 1;
    margin-left : 5px;
  }
</style>
```
```javascript
<template>
  <div class="size-box">
    <div class="size" @click="selectSize" :class="{selected:size.selected}">{{ size.name }} {{ size.price }}</div>
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
    color: rgb(24, 24, 24)
    /* text-align: center; */
  }

  .selected{
    background-color: #579062;
    color: white;
  }
</style>
```