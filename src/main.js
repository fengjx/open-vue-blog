import Vue from 'vue';
import VueRouter from 'vue-router';
import routerMap from './routers';
import filters from './filters';
import App from './App.vue'
import './assets/css/style.css';

/* eslint-disable no-new */

Vue.use(VueRouter);

// 注册Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

// 实例化VueRouter
let router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  transitionOnLoad: true
});

// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach(() => {
  window.scrollTo(0, 0)
});

routerMap(router);

router.start(App, '#app');
