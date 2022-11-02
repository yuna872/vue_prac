<template>
  <div>
    <h2>산출세액 : {{ Math.ceil((taxBase * rate[0])-rate[1]) }} 만원</h2>
    <h2>세액감면 : (-) {{ reduction }} 만원</h2>
    <finalTax :reduction="reduction" :calculatedTax="Math.ceil((taxBase * rate[0])-rate[1])"/>
  </div>
</template>

<script>
import finalTax from '@/components/finalTax';
export default {
  name: 'taxRate',
  components: {
    finalTax,
  },
  props: {
    taxBase: Number,
    reduction: Number,
  },
  computed: {
    rate() {
      if (this.taxBase > 100000) {
        return [0.45, 6540]
      } 
      else if (this.taxBase > 50000) {
        return [0.42, 3540]
      }
      else if (this.taxBase > 30000) {
        return [0.4, 2540]
      }
      else if (this.taxBase > 15000) {
        return [0.38, 1490]
      }
      else if (this.taxBase > 8800) {
        return [0.35, 1940]
      }
      else if (this.taxBase > 4600) {
        return [0.24, 522]
      }
      else if (this.taxBase > 1200) {
        return [0.15, 108]
      }
      else {
        return [0.06, 0]
      }
    }
  }
}
</script>

<style>

</style>