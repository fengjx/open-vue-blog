<template>
  <nav class="pagination" role="navigation">
    <a class="newer-posts" href="javascript:;" 
       v-if="hasPrev"
       @click.prevent="previous">
      <i class="fa fa-angle-left"></i>
    </a>
    <span class="page-number">
      第 {{page}} 页 &frasl; 共 {{total}} 页
    </span>
    <a class="older-posts" href="javascript:;" 
       v-if="hasNext"
       @click.prevent="next">
      <i class="fa fa-angle-right"></i>
    </a>
  </nav>
</template>
<style>
  body {
    background-color: #ff0000;
  }
</style>
<script>
  export default{
    props: ['router', 'param', 'total', 'page'],
    computed: {
      hasNext: function () {
        if (this.total <= 1) {
          return false;
        }
        return this.total > this.page;
      },
      hasPrev: function () {
        return this.page > 1;
      }
    },
    methods: {
      next: function () {
        this.$route.router.go({
          name: this.router,
          params: this.param,
          query: {page: parseInt(this.page) + 1}
        });
      },
      previous: function () {
        this.$route.router.go({
          name: this.router,
          params: this.param,
          query: {page: parseInt(this.page) - 1}
        });
      }
    }
  }
</script>
