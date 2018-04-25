import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Tasks from '@/views/Tasks';
import Users from '@/views/Users';
import UserCreate from '@/views/UserCreate';
import TaskCreate from '@/views/TaskCreate';

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
    {
      path: '/user',
      name: 'Users',
      component: Users,
    },
    {
      path: '/usercreation',
      name: 'UserCreate',
      component: UserCreate,
    },
    {
      path: '/taskcreation',
      name: 'TaskCreate',
      component: TaskCreate,
    },
  ],
});
