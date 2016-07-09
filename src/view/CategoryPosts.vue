<template>
  <div class="cover tag-cover">
    <h3 class="tag-name">
      分类：{{categoryCurMenu.name}}
    </h3>
    <div class="post-count">
      共 {{postPageList.records}} 篇文章
    </div>
  </div>

  <post-item :item="item" v-for="item in postPageList.rows"></post-item>

  <nav class="pagination" role="navigation">
    <span class="page-number">第 1 页 &frasl; 共 1 页</span>
  </nav>

</template>

<script>
  import PostItem from '../components/PostItem.vue'
  import {loadPostList} from '../vuex/actions'
  import {postPageList, categoryCurMenu} from '../vuex/getters'

  export default{
    data () {
      return {
        page: 1
      }
    },
    vuex: {
      getters: {
        postPageList,
        categoryCurMenu
      },
      actions: {
        loadPostList
      }
    },
    route: {
      data (transition) {
        let categoryId = transition.to.params.id;
        this.loadPostList(this.page, {categoryId});
      }
    },
    components: {
      PostItem
    }
  }
</script>
<style>
</style>
