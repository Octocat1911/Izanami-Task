import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Tasks from '@/views/Tasks';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/task',
      name: 'Tasks',
      component: Tasks,
    },
  ],
});
