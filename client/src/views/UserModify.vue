<template>
  <div class="user-modify">
    <h1 class="title">Edit user</h1>
    <section class="form">
        <b-field label="Firstname">
            <b-input v-model="cacheUser.firstname" :placeholder="user.firstname" required></b-input>
        </b-field>
        <b-field label="Lastname">
            <b-input v-model="cacheUser.lastname" :placeholder="user.lastname" required></b-input>
        </b-field>
         <b-field label="Description">
            <b-input v-model="cacheUser.description" minlength="25" maxlength="40"
            type="textarea" :placeholder="user.description" required></b-input>
        </b-field>
        <a href="#/user">
          <button class="button is-success" @click="modifyUser(cacheUser)">Submit</button>
        </a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'UserModify',
  data: () => ({
    cacheUser: {
      firstname: '',
      lastname: '',
      description: '',
    },
  }),
  computed: {
    user() {
      return this.$store.getters.getCurrentUser;
    },
  },
  methods: {
    modifyUser(newUser) {
      const payload = {
        // eslint-disable-next-line
        id: this.user._id,
        user: newUser,
      };
      this.$store.dispatch('modifyUser', payload);
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
