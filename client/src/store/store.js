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
    async loadTasks(state) {
      state.tasks = await Service.taskService.get();
    },
    async loadUsers(state) {
      state.users = await Service.userService.get();
    },
    deleteTask(state, id) {
      Service.taskService.delete(id);
      state.tasks.splice(state.tasks.findIndex(x => x.id === id), 1);
    },
    deleteUser(state, id) {
      Service.userService.delete(id);
      state.users.splice(state.users.findIndex(x => x.id === id), 1);
    },
  },
  actions: {
    loadTasks(context) {
      context.commit('loadTasks');
    },
    loadUsers(context) {
      context.commit('loadUsers');
    },
    deleteTask(context, id) {
      context.commit('deleteTask', id);
    },
    deleteUser(context, id) {
      context.commit('deleteUser', id);
    },
  },
});
