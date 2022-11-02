<template>
  <!-- template 태그는 영역을 구분하기 위함이지 태그의 역할을 하지 않음 -->
  <!-- 따라서 최상위 태그 필요 -->
  <div class="border">
    <h1>안녕 내 첫번째 컴포넌트 귀욤아</h1>
    <!-- 3. 보여주기 -->
    <MyComponentItem 
      static-props='MyComponent에서 보낸 데이터'
      :dynamic-props="dynamicProps"
      @child-to-parent="parentGetEvent"
      @child-input="getDynamicData"
      />
      <!-- @aaa='bbb' -->
      <!-- aaa라는 이벤트를 받으면 내가 선언한 bbb라는 메서드를 호출하겠다 -->
  </div>
</template>

<script>
// 1. 불러오기
import MyComponentItem from '@/components/MyComponentItem'

export default {
  name: 'MyComponent',
  components:{
    // 2. 등록하기
    MyComponentItem,
  },
  data: function () {
    return {
      // 컴포넌트의 데이터
      dynamicProps: '이건 동적인 데이터'
    }
  },
  methods: {
    parentGetEvent(childData) {
      console.log('자식 컴포넌트에서 발생한 emit 이벤트를 들었당')
      console.log(childData)
    },
    getDynamicData(childInputData) {
      console.log(`사용자가 입력한 값은 ${childInputData} 입니다.`)
    }
  }
}
</script>

<style>
  .border {
    border: solid 2px black;
  }
</style>