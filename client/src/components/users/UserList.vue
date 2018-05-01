<template>
  <div>
    <user-card v-for="user in users"
    :user="user"
    :key="user.id"></user-card>
  </div>
</template>

<script>
import UserCard from './userCard';

export default {
  name: 'UserList',
  components: {
    UserCard,
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
  },
  async created() {
    await this.$store.dispatch('loadUsers');
  },
};
</script>

<style lang="scss" scoped>
</style>
