<template>
  <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{{user.firstname}} {{user.lastname}} </p>
      </div>
    </div>

    <div class="content">
    <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
   <footer class="card-footer">
    <a href="#" class="card-footer-item">Save</a>
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
      this.$store.dispatch('setCurrentUser', user);
    },
  },
};
</script>

<style lang="scss" scoped>
  .card{
    margin: 10px;
  }
</style>
