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
      </div>
    </div>
    <footer class="card-footer">
      <a href="#/taskmodify" class="card-footer-item" @click="editTask(task)">Edit</a>
      <a class="card-footer-item" @click="deleteCard(task._id)">Delete</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    task: {
      type: Object,
      require: true,
    },
  },
  methods: {
    deleteCard(id) {
      this.$store.dispatch('deleteTask', id);
    },
    editTask(task) {
      this.$store.commit('setCurrentTask', task);
    },
  },
};
</script>

<style lang="scss" scoped>
  .card{
    margin: 10px;
  }
</style>
