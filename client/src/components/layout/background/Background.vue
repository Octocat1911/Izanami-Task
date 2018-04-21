<template>
  <div class="background-image"></div>
</template>

<script>
export default {
  name: 'Background',
};
</script>

<style lang="scss" scoped>
  .background-image{
    background-color: #666;
    background-image: url('../../../assets/overlay.png'), url('../../../assets/banner.jpg');
    background-position: top left, center center;
    background-repeat: repeat, no-repeat;
    background-size: auto, cover;
    display: block;
    height: 1200px;
    left: 0;
    position: fixed;
    right: 0;
    z-index: 1;
  }
</style>
