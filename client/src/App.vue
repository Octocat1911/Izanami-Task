<template>
  <Layout class="layout">
    <router-view slot="content" />
  </Layout>
</template>

<script>
import Layout from '@/components/layout';

export default {
  name: 'App',
  components: {
    Layout,
  },
};
</script>

<style lang='scss'>
  @import '../node_modules/normalize.css/normalize.css';
  .layout{
    background-image: url('./assets/overlay.png'), url('./assets/banner.jpg');
    background-position: top left, center center;
    background-repeat: repeat, no-repeat;
    background-size: auto, cover;
    height: 1200px;
    left: 0;
    right: 0;
    position: fixed;
    min-height: 100%;
  }
</style>
