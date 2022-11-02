### App.vue
```vue
<template>
  <div id="app">
    <h1>소득세 계산기</h1>
    <inCome/>

  </div>
</template>

<script>
import inCome from '@/components/inCome';


export default {
  name: 'App',
  components: {
    inCome,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```
### Income.vue
```vue
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
```
### TaxRate.vue
```vue
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
```
### FinalTax.vue
```vue
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
```
---
![3-4](3-4.png)
