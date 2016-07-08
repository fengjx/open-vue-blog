<template>
    <post-item :item="item" v-for="item in postPageList.rows"></post-item>
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
        let categoryId = transition.to.params.categoryId;
        this.loadPostList(categoryId, this.page);
      }
    },
    components: {
      PostItem
    }
  }

</script>
