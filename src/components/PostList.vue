<template>

  <main class="col-md-8 main-content" v-for="item in page.list">
    <post-item :item="item"></post-item>
  </main>

</template>
<style>
  body {
    background-color: #ff0000;
  }
</style>
<script>
  import PostItem from '../components/PostItem.vue'

  export default{
    data(){
      return {
        page: {
          page: 1,
          total: 100,
          pageSize: 10,
          list: [
            {
              id: "123dfsdf21312",
              title: "title1",
              anthor: "FengJianxin",
              desc: "ssssss",
              img: "",
              createDate: "2016-06-20"
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
