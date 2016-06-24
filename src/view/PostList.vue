<template>
  <div v-for="item in page.list">
    <post-item :item="item"></post-item>
  </div>
</template>
<style>
</style>
<script>
  import PostItem from '../components/PostItem.vue'
  import { loadPostList } from './actions'
  import { postPageList } from './getters'

  export default{
    vuex: {
      getters: {
        postPageList
      },
      actions: loadPostList
    },
    route: {
      data (transition) {
        this.loadPostList();
      }
    },
    components: {
      PostItem
    }
  }

</script>
