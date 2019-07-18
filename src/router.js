import Vue from 'vue';
import Router from 'vue-router';
import meta from 'vue-meta';

import { getDeviceType } from './js/utils';
const deviceType = getDeviceType();

Vue.use(Router);
Vue.use(meta, {
  // 컴포넌트 옵션 이름 변경 (예: 'head')
  keyName: 'metaInfo',
  // 태그를 관찰하기 위해 추가하는 속성 이름 vue-meta
  attribute: 'data-vue-meta',
  // 메타 정보가 이미 서버에서 렌더링 되었음을 vue-meta에 알리는 속성 이름
  ssrAttribute: 'data-vue-meta-server-rendered',
  // vue-meta가 태그를 덮어 쓸지 또는 태그를 추가할지 결정하기 위해 사용하는 속성 이름
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
