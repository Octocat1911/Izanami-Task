import Vue from 'vue';
import Vuex from 'vuex';
import Service from '@/services/';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    users: [],
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getUsers(state) {
      return state.users;
    },
  },
  mutations: {
    loadTasks(state, tasks) {
      state.tasks = tasks;
    },
    loadUsers(state, users) {
      state.users = users;
    },
    deleteTask(state, id) {
      state.tasks.splice(state.tasks.findIndex(x => x.id === id), 1);
    },
    deleteUser(state, id) {
      state.users.splice(state.users.findIndex(x => x.id === id), 1);
    },
  },
  actions: {
    async loadTasks(context) {
      const tasks = await Service.taskService.get();
      context.commit('loadTasks', tasks);
    },
    async loadUsers(context) {
      const users = await Service.userService.get();
      context.commit('loadUsers', users);
    },
    async deleteTask(context, id) {
      await Service.taskService.delete(id);
      context.commit('deleteTask', id);
    },
    async deleteUser(context, id) {
      await Service.userService.delete(id);
      context.commit('deleteUser', id);
    },
  },
});
