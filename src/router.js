import Vue from 'vue';
import Router from 'vue-router';
import meta from 'vue-meta';

import { getDeviceType } from './js/utils';
const deviceType = getDeviceType();

Vue.use(Router);
Vue.use(meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid'
});

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(`./views/home/${deviceType}/Index.vue`)
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(`./views/about/${deviceType}/Index.vue`)
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import(`./views/portfolio/${deviceType}/Index.vue`)
    }
  ]
});
