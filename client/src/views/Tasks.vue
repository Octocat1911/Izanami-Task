<template>
  <task-list class="task-list"></task-list>
</template>

<script>
import TaskList from '@/components/tasks';

export default {
  name: 'Tasks',
  components: {
    TaskList,
  },
};
</script>

<style lang="scss" scoped>
  .task-list{
    display: flex;
    flex-direction: row;
  }
</style>
