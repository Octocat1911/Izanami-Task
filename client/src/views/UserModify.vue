<template>
  <div class="user-modify">
    <h1 class="title">Edit user</h1>
    <section class="form">
        <b-field label="Firstname">
            <b-input v-model="user.firstname" placeholder="Enter your firstname"></b-input>
        </b-field>
        <b-field label="Lastname">
            <b-input v-model="user.lastname" placeholder="Enter your lastname"></b-input>
        </b-field>
        <button class="button is-success" @click="submit(user)">Submit</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'UserModify',
  computed: {
    user() {
      return this.$store.getters.getCurrentUser;
    },
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('setCurrentUser', {});
    next();
  },
};
</script>

<style lang="scss" scoped>
  .user-modify{
    .title{
      margin-top: 80px;
      text-align: center;
    }
    .form{
    display: block;
    margin: auto;
    margin-top: 100px;
    width: 20%;
    align-content: center;
    }
  }
</style>
