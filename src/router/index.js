import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Covid from '@/components/Covid';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/covid', name: 'covid', component: Covid },
    { path: '*', redirect: { name: 'home' } },
  ],
});
