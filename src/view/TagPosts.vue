<template>
  <div class="cover tag-cover">
    <h3 class="tag-name">
      标签：{{curTag.label}}
    </h3>
    <div class="post-count">
      共 {{postPageList.total}} 篇文章
    </div>
  </div>

  <post-item :item="item" v-for="item in postPageList.rows"></post-item>

  <Paginate
    router="index"
    :total="postPageList.total"
    :page="page">
  </Paginate>

</template>

<script>
  import PostItem from '../components/PostItem.vue'
  import Paginate from '../components/Paginate.vue'
  import {loadPostList} from '../vuex/actions'
  import {postPageList, curTag} from '../vuex/getters'

  export default{
    data () {
      return {
        page: 1
      }
    },
    vuex: {
      getters: {
        postPageList,
        curTag
      },
      actions: {
        loadPostList
      }
    },
    route: {
      data (transition) {
        let tagId = transition.to.params.id;
        this.loadPostList(this.page, {tagId});
      }
    },
    components: {
      PostItem,
      Paginate
    }
  }
</script>
<style>
</style>
