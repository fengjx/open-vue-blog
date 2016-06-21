import Vue from 'vue'
import VueRouter from 'vue-router'
import routerMap from './routers'
import filters from './filters'
import './assets/style.css'

/* eslint-disable no-new */
// new Vue({
//  el: 'body',
//  components: { Index }
// })

Vue.use(VueRouter)

// 注册Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

// 实例化VueRouter
let router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
})

// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((transition) => {
  console.log('router start before...')
})

let app = Vue.extend({})
routerMap(router)

router.start(app, '#app')