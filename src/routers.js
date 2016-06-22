import PostList from './view/PostList.vue'
import Post from './view/Post.vue'
import TagCloud from './view/TagCloud.vue'


export default function (router) {
  router.map({
    '/': {				//首页
      name: 'index',
      component: PostList
    },
    /* 404路由 */
    '*': {
      component: PostList
    },
    '/post/:id': {  // 文章详情
      name: 'post',
      component: Post
    },
    '/tag-cloud': {  // 标签云
      name: 'tagCloud',
      component: TagCloud
    }
  })
}
