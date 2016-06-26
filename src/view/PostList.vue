<template>
  <div id="list-{{item.id}}" v-for="item in postPageList.rows">
    <post-item :item="item"></post-item>
  </div>
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
        var categoryId = transition.to.params.categoryId;
        this.loadPostList(categoryId, this.page);
      }
    },
    components: {
      PostItem
    }
  }

</script>
