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
              <li class="nav-current">
                <a v-link="{name:'index'}">首页</a>
              </li>

              <template v-for="menu in tree">
                <li v-if="menu.isLeef">
                  <a v-link="{name:'category', params: {id: menu.id}}">{{menu.name}}</a>
                </li>
                <dropdown v-else :menu="menu"></dropdown>
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
    props: ['tree'],
    data () {
      return {}
    },
    components: {
      Dropdown
    }
  }
</script>
<style>
</style>
