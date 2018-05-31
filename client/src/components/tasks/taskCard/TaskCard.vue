<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{task.title}}
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        <time>Begin : {{task.dateBegin}}</time>
        <br>
        <time>End : {{task.dateEnd}}</time>
        <br>
        <a href="#" v-for="tag in task.tags"
        :tag="tag"
        :key="tag">#{{tag}} </a>
        <a href="#" v-for="user in cardUsers"
        :key="user.id"> @{{ user[0].firstname }} </a>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#/taskmodify" class="card-footer-item" @click="editTask(task)">Edit</a>
      <a class="card-footer-item" @click="deleteCard(task._id)">Delete</a>
    </footer>
  </div>
</template>

<script>
import Service from '@/services/';

export default {
  name: 'TaskCard',
  props: {
    task: {
      type: Object,
      require: true,
    },
  },
  data: () => ({
    cardUsers: [],
  }),
  methods: {
    deleteCard(id) {
      this.$store.dispatch('deleteTask', id);
    },
    editTask(task) {
      this.$store.commit('setCurrentTask', task);
    },
  },
  async created() {
    this.task.users.forEach(async (user) => {
      this.cardUsers.push(await Service.userService.get(user));
    });
  },
};
</script>

<style lang="scss" scoped>
  .card{
    margin: 10px;
  }
</style>
