<template>
  <div class="user-creation">
    <h1 class="title">User creation </h1>
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
  name: 'UserCreate',
  data: () => ({
    user: {
      firstname: '',
      lastname: '',
    },
  }),
  methods: {
    submit(user) {
      const newuser = {
        firstname: user.firstname,
        lastname: user.lastname,
      };
      this.$store.dispatch('addUser', newuser);
      this.user.firstname = '';
      this.user.lastname = '';
    },
  },
};
</script>

<style lang="scss" scoped>
  .user-creation{
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
