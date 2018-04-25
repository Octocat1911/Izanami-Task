<template>
  <div>
    <user-card v-for="user in users"
    :user="user"
    :key="user.id" @deleted="deleteUser"></user-card>
  </div>
</template>

<script>
import Service from '@/services/';
import UserCard from './userCard';

export default {
  name: 'UserList',
  components: {
    UserCard,
  },
  data: () => ({
    users: [],
  }),
  methods: {
    deleteUser(id) {
      Service.userService.delete(id);
      this.users.splice(this.users.findIndex(x => x.id === id), 1);
    },
  },
  async created() {
    this.users = await Service.userService.get();
  },
};
</script>

<style lang="scss" scoped>
</style>
