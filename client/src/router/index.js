import Vue from 'vue';
import Router from 'vue-router';
import Store from '@/store/';
import Home from '@/views/Home';
import Tasks from '@/views/Tasks';
import Users from '@/views/Users';
import UserCreate from '@/views/UserCreate';
import TaskCreate from '@/views/TaskCreate';
import UserModify from '@/views/UserModify';
import TaskModify from '@/views/TaskModify';

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
    {
      path: '/taskmodify',
      name: 'TaskModify',
      component: TaskModify,
      beforeEnter: (to, from, next) => {
        // eslint-disable-next-line
        if (Store.getters.getCurrentTask._id === undefined) {
          next(false);
        } else {
          next();
        }
      },
    },
    {
      path: '/usermodify',
      name: 'UserModify',
      component: UserModify,
      beforeEnter: (to, from, next) => {
        // eslint-disable-next-line
        if (Store.getters.getCurrentUser._id === undefined){
          next(false);
        } else {
          next();
        }
      },
    },
  ],
});
