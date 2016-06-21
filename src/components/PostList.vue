<template>
  <div v-for="item in page.list">
    <post-item :item="item"></post-item>
  </div>
</template>
<style>
</style>
<script>
  import PostItem from '../components/PostItem.vue'

  export default{
    data () {
      return {
        page: {
          page: 1,
          total: 100,
          pageSize: 10,
          list: [
            {
              id: '123dfsdf21312',
              title: 'title1',
              anthor: 'FengJianxin',
              desc: 'ssssss',
              img: 'http://img.club.pchome.net/kdsarticle/2013/11small/21/fd548da909d64a988da20fa0ec124ef3_1000x750.jpg',
              createDate: '2016-06-20'
            }
          ]
        }
      }
    },
    components: {
      PostItem
    }
  }
</script>
