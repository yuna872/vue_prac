<template>
  <div>
    <p>
      <span>연봉 입력 (만원) : </span>
      <input type="text" v-model="income">
    </p>
    <p>
      <span>세액감면액 (만원) : </span>
      <input type="text" v-model="reduction">
    </p>
    <hr>
    <h2>종합소득금액 : {{ income }}만원</h2>
    <h2>종합소득공제 : (-) {{ deduction }} 만원</h2>
    <h2>과세표준 : {{ income-deduction > 0 ? income-deduction : 0 }} 만원</h2>
    <hr>
    <taxRate :reduction="reduction" :taxBase="taxBase"/>
  </div>
</template>

<script>
import taxRate from '@/components/taxRate';
export default {
  name: 'inCome',
  data() {
    return {
      income: null,
      deduction : 150,
      reduction : null,
    }
  },
  components: {
    taxRate,
  },
  computed: {
    taxBase() {
      return this.income-this.deduction > 0 ? this.income-this.deduction : 0
    }
  }
}
</script>

<style>

</style>