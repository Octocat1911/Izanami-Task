<template>
  <div>
    <task-card v-for="task in tasks"
    :task="task"
    :key="task.id"></task-card>
  </div>
</template>

<script>
import Service from '@/services/';
import TaskCard from './taskCard';

export default {
  name: 'TaskList',
  components: {
    TaskCard,
  },
  data: () => ({
    tasks: [],
  }),
  async created() {
    this.tasks = await Service.taskService.get();
  },
};
</script>

<style lang="scss" scoped>

</style>
