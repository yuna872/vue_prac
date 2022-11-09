<template>
  <div class="option-list">
    <h2>3. 옵션을 고르세요.</h2>
    
    <OptionListItem 
      v-for="(option, index) in optionList" 
      :key="index" 
      :option="option"/>
  </div>
</template>

<script>
import OptionListItem from '@/components/OptionListItem'

export default {
  name: 'OptionList',
  components: {
    OptionListItem
  },
  computed: {
    optionList: function () {
      return this.$store.state.optionList
    },
  },
  methods: {
    increase: function () {
    },
    decrease: function () {
    },
  },
}
</script>

<style>
.option-list {
    background-color: white;
    border-radius: 5px;
    flex-grow: 1;
    margin-right : 5px;
    padding : 10px;
  }
</style>