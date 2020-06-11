import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
// import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import moment from 'moment';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App';
import router from './router';
import store from './store';

import './main.css';

Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

Vue.filter('date', date => moment(date).format('MMMM DD, YYYY'));

new Vue({
  render: h => h(App),
  components: { App },
  router,
  store,
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App },
//   store,
// });