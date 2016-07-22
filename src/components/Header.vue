<template>
  <!-- start header -->
  <header class="main-header">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>
            别看我像杀猪的，其实我是写诗的！
          </h1>
        </div>

        <div class="col-sm-12 hide">
          <a href="" class="btn btn-default btn-doc" target="_blank">天天微信平台</a>
          <a href="" class="btn btn-default btn-doc" target="_blank">问答社区</a>
        </div>
      </div>
    </div>
  </header>
  <!-- end header -->

  <!-- start navigation -->
  <nav class="main-navigation">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="navbar-header">
            <span class="nav-toggle-button collapsed" data-toggle="collapse" data-target="#main-menu">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <i class="fa fa-bars"></i>
            </span>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="menu">
              <li v-bind:class="{ 'nav-current': curIndex == -1}">
                <a v-link="{name:'index'}">首页</a>
              </li>

              <template v-for="(index, menu) in tree">
                <li v-if="menu.isLeef" v-bind:class="{ 'nav-current': curIndex == index}">
                  <a v-link="{name:'category', params: {id: menu.id}}">{{menu.name}}</a>
                </li>
                <dropdown v-else :menu="menu" v-bind:class="{ 'nav-current': curIndex == index}"></dropdown>
              </template>

              <form class="navbar-form navbar-right" role="search">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">搜索</button>
              </form>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- end navigation -->

</template>
<script>
  import Dropdown from './Dropdown.vue';

  export default {
    props: ['tree', 'curmenu'],
    data () {
      return {}
    },
    computed: {
      curIndex: function () {
        if(!this.curmenu){
          return -1;
        }
        for (var i = this.tree.length - 1; i >= 0; i--) {
          if (this.curmenu.id == this.tree[i].id) {
            return i;
          }
          if (!this.tree[i].isLeef) {
            for (var j = this.tree[i].children.length - 1; j >= 0; j--) {
              if (this.curmenu.id == this.tree[i].children[j].id) {
                return i;
              } 
            }
          }
        }
        return -1;
      }
    },
    components: {
      Dropdown
    }
  }
</script>
<style>
</style>
