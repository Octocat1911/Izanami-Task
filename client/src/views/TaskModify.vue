<template>
  <div class="task-modify">
    <h1 class="title">Task modify</h1>
    <section class="form">
      <b-field label="Title">
        <b-input v-model="cacheTask.title" :placeholder="task.title"></b-input>
      </b-field>
      <b-field label="Begin date">
        <b-datepicker
          v-model="cacheTask.dateBegin"
          :placeholder="task.dateBegin">
        </b-datepicker>
      </b-field>
      <b-field label="Ending date">
        <b-datepicker
          v-model="cacheTask.dateEnd"
          :placeholder="task.dateEnd">
        </b-datepicker>
      </b-field>
       <b-field label="Add some tags">
          <b-taginput
            v-model="cacheTask.tags"
            :placeholder="task.tags">
          </b-taginput>
        </b-field>
        <a href="#/task">
          <button class="button is-success" @click="modifyTask(cacheTask)">Submit</button>
        </a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TaskModify',
  data: () => ({
    cacheTask: {
      title: '',
      dateBegin: new Date(),
      dateEnd: new Date(),
      status: '',
      tags: [],
      users: [],
    },
  }),
  props: {
    users: {
      type: Array,
      require: true,
    },
  },
  methods: {
    modifyTask(newTask) {
      const modifiedTask = newTask;
      modifiedTask.dateBegin = newTask.dateBegin.toDateString();
      modifiedTask.dateEnd = newTask.dateEnd.toDateString();
      modifiedTask.users = this.task.users;
      const payload = {
        // eslint-disable-next-line
        id: this.task._id,
        task: modifiedTask,
      };
      this.$store.dispatch('modifyTask', payload);
    },
  },
  created() {
    this.task = this.$store.getters.getCurrentTask;
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('setCurrentTask', {});
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
