<template>
  <img class="img-box" src="../assets/ssafy-banner.png">
</template>

<script>
export default {
  name: 'homePage',
  methods: {
    goNextPage() {
      this.$emit('go-next-page')
    },
    goBackPage() {
      this.$emit('go-back-page')
    }
  }
}
</script>

<style>
.img-box {
  width : 800px;
  height : 500px;
  box-shadow: 5px 5px 10px gray;
  margin: 50px auto auto auto;
}

/* img {
  width : 100%;
  height : 100%;
} */
</style>