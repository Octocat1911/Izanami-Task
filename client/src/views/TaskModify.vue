<template>
  <div class="task-modify">
    <h1 class="title">Task creation </h1>
    <section class="form">
      <b-field label="Title">
        <b-input v-model="task.title" placeholder="Enter a title"></b-input>
      </b-field>
      <b-field label="Begin date">
        <b-datepicker
          v-model="task.dateBegin"
          placeholder="Click to select...">
        </b-datepicker>
      </b-field>
      <b-field label="Ending date">
        <b-datepicker
          v-model="task.dateEnd"
          placeholder="Click to select...">
        </b-datepicker>
      </b-field>
       <b-field label="Add some tags">
          <b-taginput
            v-model="task.tags"
            placeholder="Add a tag">
          </b-taginput>
        </b-field>
      <button class="button is-success" @click="submit(task)">Submit</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TaskModify',
  computed: {
    task() {
      return this.$store.getters.getCurrentTask;
    },
  },
  beforeRouteLeave(to, from, next) {
    this.$store.dispatch('setCurrentTask', {});
    next();
  },
};
</script>

<style lang="scss" scoped>
  .task-modify{
    .title{
      text-align: center;
      margin-top: 80px;
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
