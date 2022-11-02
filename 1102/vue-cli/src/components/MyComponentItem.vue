<template>
  <div>
    <h3>나는 MyComponent의 아기 컴포넌트얌</h3>
    <p>{{ staticProps }}</p>
    <p>{{ dynamicProps }}</p>
    <button @click="childToParent">클릭!</button>
    <!-- 양방향 바인딩 -->
    <input 
      type="text"
      v-model="childInputData" 
      @keyup.enter="childInput">
  </div>
  
</template>

<script>
export default {
  name: 'MyComponentItem',
  props: {
    staticProps : String,
    dynamicProps: String,
  },
  data: function () {
    return {
      // 사용자가 입력한 값 실시간으로 저장되고 있음
      childInputData: null,
    }
  },
  methods:{
    childToParent() {
      // 내장된 속성 값이라 $ 붙어있음
      this.$emit('child-to-parent', '애기가 보낸 데이터')
    },
    childInput() {
      this.$emit('child-input', this.childInputData)
    }
  },
}
</script>

<style>
</style>