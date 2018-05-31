<template>
  <div>
    <Navbar @openSide="setVisible()" class="navbar"></Navbar>
    <transition name="slide">
    <Sidebar @closeSide="setVisible()" class="sidebar" v-if="visible"></Sidebar>
    </transition>
    <slot name="content">
    </slot>
  </div>
</template>

<script>
import Navbar from './navbar';
import Sidebar from './sidebar';

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
  },
  data: () => ({
    visible: false,
  }),
  methods: {
    setVisible() {
      this.visible = !this.visible;
    },
  },
};
</script>


<style lang="scss" scoped>
  .slide-leave-active,
  .slide-enter-active {
    transition: 0.5s;
  }
  .slide-enter {
    transform: translate(-100%, 0);
  }
  .slide-leave-to {
    transform: translate(-100%, 0);
  }
</style>
