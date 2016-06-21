'use strict'

export default function (router) {
  router.map({
    '/': {				//首页
      name: 'index',
      component: function (resolve) {
        require(['./views/index.vue'], resolve);
      }
    },
    /* 404路由 */
    '*': {
      component: function (resolve) {
        require(['./views/index.vue'], resolve);
      }
    },
    '/post/:id': {  // 文章详情
      name: 'post',
      component: function (resolve) {
        require(['./views/post.vue'], resolve);
      }
    },
    '/tagCloud': {  // 标签云
      name: 'tagCloud',
      component: function (resolve) {
        require(['./views/post.vue'], resolve);
      }
    }
  })
}
