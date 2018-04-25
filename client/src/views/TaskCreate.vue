<template>
  <div class="task-creation">
    <section class="form">
      <b-field label="Firstname">
        <b-input v-model="task.title" placeholder="Enter your firstname"></b-input>
      </b-field>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TaskCreate',
  data: () => ({
    task: {
      title: '',
      dateBegin: '',
      dateEnd: '',
      status: '',
      tags: '',
    },
  }),
};
</script>

<style lang="scss" scoped>
</style>
