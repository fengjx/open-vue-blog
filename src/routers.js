import Index from './view/Index.vue';
import PostPage from './view/PostPage.vue';
import TagCloud from './view/TagCloud.vue';


export default function (router) {
  router.map({
    '/': {				//首页
      name: 'index',
      component: Index
    },
    /* 404路由 */
    '*': {
      component: Index
    },
    '/post/:id': {  // 文章详情
      name: 'post',
      component: PostPage
    },
    '/tagCloud': {  // 标签云
      name: 'tagCloud',
      component: TagCloud
    }
  })
}
