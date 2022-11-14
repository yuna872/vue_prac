<template>
  <div>
    <div class="banner">
      <h3>찾으시려는 페이지가 존재하지 않습니다!</h3>
      <img src="@/assets/noResult.png" style="width:100%;height:100%">
    </div>
  </div>
</template>

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<script>

export default {
  name : 'notfound',
  computed: {
  },
  methods: {
    
  }
}
</script>

<style>
  .yellowBtn {
    width : 70px;
    height : 40px;
    border : solid 2px rgb(255, 213, 0);
    background-color: white;
    margin : auto 20px
  }
  .btnBox {
    margin : 40px auto;
  }
  .banner {
    margin : 40px auto;
    width : 700px;
    height : 400px;
  }
</style>