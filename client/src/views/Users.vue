<template>
  <user-list class="user-list"></user-list>
</template>

<script>
import UserList from '@/components/users/';

export default {
  name: 'Users',
  components: {
    UserList,
  },
};
</script>

<style lang="scss" scoped>
  .user-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 2;
  }
</style>
