<template>
  <div class="task-list">
    <task-card v-for="task in tasks"
    :task="task"
    :key="task.id" @deleted="deleteCard"></task-card>
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
  methods: {
    deleteCard(id) {
      Service.taskService.delete(id);
      this.tasks.splice(this.tasks.findIndex(x => x.id === id), 1);
    },
  },
  async created() {
    this.tasks = await Service.taskService.get();
  },
};
</script>

<style lang="scss" scoped>
</style>
