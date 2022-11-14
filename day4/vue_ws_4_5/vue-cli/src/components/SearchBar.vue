<template>
  <div class="frame">
    <b-form-input id="inputbox" v-model="inputV"></b-form-input>
    <b-button variant="primary" @click="sendInputData">검색</b-button>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
<script>

export default {
  name: 'SearchBar',
  data() {
    return {
      inputV : null,
    }
  },
  methods : {
    sendInputData() {
      this.$emit('send-input-data', this.inputV)
    }
  }
  
}
</script>

<style>
  #inputbox {
    width : 500px;
    border-color: #0D6EFD;
  }

  .frame {
    display: flex;
    /* border : solid 2px red; */
    width : 580px;
    justify-content: space-evenly;
    margin-top : 20px;
  }
</style>