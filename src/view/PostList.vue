<template>
  <post-item :item="item" v-for="item in postPageList.rows"></post-item>

  <nav class="pagination" role="navigation">
    <span class="page-number">
      第 {{page}} 页 &frasl; 共 {{postPageList.total}} 页
      <a class="older-posts" v-link="{ name: 'index', params: { page: page + 1 }}" >
        <i class="fa fa-angle-right"></i>
      </a>
    </span>
  </nav>
</template>
<style>
</style>
<script>
  import PostItem from '../components/PostItem.vue'
  import {loadPostList} from '../vuex/actions'
  import {postPageList} from '../vuex/getters'

  export default{
    data () {
      return {
        page: 1
      }
    },
    vuex: {
      getters: {
        postPageList
      },
      actions: {
        loadPostList
      }
    },
    route: {
      data (transition) {
        let curPage = transition.to.params.page;
        this.page = curPage ? curPage : 0;
        this.loadPostList(this.page);
      }
    },
    components: {
      PostItem
    }
  }

</script>
