<template>
  <post-item :item="item" v-for="item in postPageList.rows"></post-item>

  <Paginate
    router="index"
    :total="postPageList.total"
    :page="page">
  </Paginate>
</template>
<style>
</style>
<script>
  import PostItem from '../components/PostItem.vue'
  import Paginate from '../components/Paginate.vue'
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
        this.page = transition.to.query.page ? transition.to.query.page : 1;
        this.loadPostList(this.page);
      }
    },
    components: {
      PostItem,
      Paginate
    }
  }

</script>
