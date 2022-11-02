<template>
  <div>
    <hr>
    <h2>결정세액 : {{ calculatedTax-reduction >= 0 ? calculatedTax-reduction : '-' }} 만원</h2>
  </div>
</template>

<script>
export default {
  name: 'finalTax',
  props: {
    reduction : Number,
    calculatedTax : Number,
  }
}
</script>

<style>

</style>