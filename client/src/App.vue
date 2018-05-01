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
  body,html{
    height: 100%;
  }
  .layout{
    background-image: url('./assets/overlay.png'), url('./assets/banner.jpg');
    background-position: top left, center center;
    background-repeat: repeat, no-repeat;
    background-size: auto, cover;
    min-height: 100%;
  }
</style>
