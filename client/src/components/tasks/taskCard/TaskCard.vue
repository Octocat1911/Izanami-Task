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
        <a href="#">#{{task.tags}}</a>
        <br>
        <time datetime="2016-1-1">Begin : {{task.dateBegin}}</time>
        <br>
        <time datetime="2016-1-1">End : {{task.dateEnd}}</time>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item" v-on:click="deleteCard(task._id)">Delete</a>
    </footer>
  </div>
</template>

<script>
import Service from '@/services';

export default {
  name: 'TaskCard',
  components: {
    Service,
  },
  methods: {
    deleteCard(id) {
      Service.taskService.delete(id);
      this.$emit('deleted', id);
    },
  },
  props: {
    task: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .card{
    margin: 10px;
  }
</style>
