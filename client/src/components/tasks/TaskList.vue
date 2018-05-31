<template>
  <div class="task-list">
    <task-card v-for="task in tasks"
    :task="task"
    :key="task.id"></task-card>
  </div>
</template>

<script>
import TaskCard from './taskCard';

export default {
  name: 'TaskList',
  components: {
    TaskCard,
  },
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
  },
  methods: {
  },
  async created() {
    await this.$store.dispatch('loadTasks');
  },
};
</script>

<style lang="scss" scoped>
</style>
