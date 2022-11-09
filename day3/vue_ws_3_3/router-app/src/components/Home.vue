<template>
  <div>
    <div class="banner" v-if="page===0">
      <img src="@/assets/ssafy-banner.png" style="width:100%;height:100%">
    </div>
    <Happeed v-else-if="page===1"/>
  
  </div>
</template>

<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<script>
import Happeed from '@/views/Happeed';

export default {
  name : 'home',
  components: {
    Happeed,
  },
  computed: {
    page() {
      return this.$store.state.page
    }
  },
  methods: {
    goHome() {
      this.$router.push({name : 'home'})
    }
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