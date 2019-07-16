import Vue from 'vue';
import Router from 'vue-router';

import { getDeviceType } from './js/utils';
const deviceType = getDeviceType();

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(`./home/${deviceType}/Index.vue`)
    },
    {
      path: '/event01',
      name: 'event01',
      component: () => import(`./event01/${deviceType}/Index.vue`)
    },
    {
      path: '/event02',
      name: 'event02',
      component: () => import(`./event02/${deviceType}/Index.vue`)
    }
  ]
});
