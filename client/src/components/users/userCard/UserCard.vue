<template>
  <div class="card">
  <div class="card-content">
    <p class="title">{{user.firstname}}</p>
    <p class="subtitle">
      {{user.lastname}}
    </p>
    <p class="content">
      {{ user.description }}
    </p>
  </div>
   <footer class="card-footer">
    <a href="#/usermodify" class="card-footer-item" @click="editUser(user)">Edit</a>
    <a class="card-footer-item" @click="deleteCard(user._id)">Delete</a>
    </footer>
</div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      require: true,
    },
  },
  methods: {
    deleteCard(id) {
      this.$store.dispatch('deleteUser', id);
    },
    editUser(user) {
      this.$store.commit('setCurrentUser', user);
    },
  },
};
</script>

<style lang="scss" scoped>
  .card{
    margin: 10px;
  }
</style>
