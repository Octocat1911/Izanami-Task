// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons';
import App from './App';
import router from './router';
import '../node_modules/normalize.css/normalize.css';
import Store from './store/store';

Vue.use(Buefy);
Vue.config.productionTip = false;
Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  store: Store,
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
});
