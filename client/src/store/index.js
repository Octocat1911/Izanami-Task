import Vue from 'vue';
import Vuex from 'vuex';
import Service from '@/services/';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    tasks: [],
    users: [],
    currentTask: {},
    currentUser: {},
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getUsers(state) {
      return state.users;
    },
    getCurrentTask(state) {
      return state.currentTask;
    },
    getCurrentUser(state) {
      return state.currentUser;
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
      // eslint-disable-next-line
      state.tasks.splice(state.tasks.findIndex(x => x._id === id), 1);
    },
    deleteUser(state, id) {
      // eslint-disable-next-line
      state.users.splice(state.users.findIndex(x => x._id === id), 1);
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    addUser(state, user) {
      state.users.push(user);
    },
    modifyUser(state, modifiedUser) {
      const { users } = state;
      state.users = users.reduce((reducedUsers, user) => {
        const { _id } = user;
        // eslint-disable-next-line
        if (_id === modifiedUser._id) reducedUsers.push(modifiedUser);
        else reducedUsers.push(user);
        return reducedUsers;
      }, []);
    },
    modifyTask(state, modifiedTask) {
      const { tasks } = state;
      state.tasks = tasks.reduce((reducedTasks, task) => {
        const { _id } = task;
        // eslint-disable-next-line
        if (_id === modifiedTask._id) reducedTasks.push(modifiedTask);
        else reducedTasks.push(task);
        return reducedTasks;
      }, []);
    },
    setCurrentTask(state, task) {
      state.currentTask = task;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
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
      const res = await Service.taskService.delete(id);
      if (res.status === 200) {
        context.commit('deleteTask', id);
      }
    },
    async deleteUser(context, id) {
      const res = await Service.userService.delete(id);
      if (res.status === 200) {
        context.commit('deleteUser', id);
      }
    },
    async addTask(context, task) {
      const res = await Service.taskService.add(task);
      if (res.status === 201) {
        context.commit('addTask', task);
      }
    },
    async addUser(context, user) {
      const res = await Service.userService.add(user);
      if (res.status === 201) {
        context.commit('addUser', user);
      }
    },
    async modifyUser(context, payload) {
      const { id, user } = payload;
      const modifiedUser = await Service.userService.update(id, user);
      context.commit('modifyUser', modifiedUser);
    },
    async modifyTask(context, payload) {
      const { id, task } = payload;
      const modifiedTask = await Service.taskService.update(id, task);
      context.commit('modifyTask', modifiedTask);
    },
  },
});
