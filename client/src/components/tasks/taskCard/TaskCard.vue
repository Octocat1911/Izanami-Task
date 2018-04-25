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
        <time datetime="2016-1-1">Begin : {{task.dateBegin}}</time>
        <br>
        <time datetime="2016-1-1">End : {{task.dateEnd}}</time>
        <br>
        <a href="#" v-for="tag in task.tags"
        :tag="tag"
        :key="tag">#{{tag}} </a>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item">Edit</a>
      <a class="card-footer-item" @click="$emit('deleted',task._id)">Delete</a>
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
