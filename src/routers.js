import PostList from './view/PostList.vue'
import Post from './view/Post.vue'
import TagCloud from './view/TagCloud.vue'
import TagPosts from './view/TagPosts.vue'
import CategoryPosts from './view/CategoryPosts.vue'
import View404 from './view/404.vue'


export default function (router) {
  router.map({
    '/': {				//首页
      name: 'index',
      component: PostList
    },
    /* 404路由 */
    '*': {
      component: View404
    },
    '/post/:id': {  // 文章详情
      name: 'post',
      component: Post
    },
    '/tag-cloud': {  // 标签云
      name: 'tagCloud',
      component: TagCloud
    },
    'tag/:id': {
      name: 'tag',
      component: TagPosts
    },
    'category/:id': {
      name: 'category',
      component: CategoryPosts
    }
  })
}
