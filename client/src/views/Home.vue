<template>
  <div class="home">
    <img src="../assets/izanami.png" alt="">
  </div>
</template>

<script>
import InputTag from 'vue-input-tag';

export default {
  name: 'Home',
  components: {
    InputTag,
  },
};
</script>

<style lang='scss' scoped>
  img{
    display: block;
    margin: auto;
    margin-top: 150px;
    filter: drop-shadow(20px 20px 20px #222);
  }
</style>
