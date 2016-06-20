<template>
  <!-- start header -->
  <header class="main-header">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>
            使用vue重写，颤抖吧，凡人！
        </h1>
      </div>

      <div class="col-sm-12 hide">
        <a href="" class="btn btn-default btn-doc" target="_blank">5.1 中文文档</a>
        <a href="" class="btn btn-default btn-doc" target="_blank">5.0 中文文档</a>
        <a href="" class="btn btn-default btn-doc" target="_blank">4.2 中文文档</a>
        <a href="" class="btn btn-default btn-doc" target="_blank">4.1 中文文档</a>
        <a href="" class="btn btn-default btn-doc" target="_blank">Lumen 中文文档</a>
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
              <i class="fa fa-bars"></i>
              </span>
          </div>
          <div class="collapse navbar-collapse" id="main-menu">
            <ul class="menu">
              <li class="nav-current" role="presentation"><a href="/">首页</a></li>
              <li  role="presentation"><a href="http://lumen.golaravel.com" title="Lumen中文文档"  target="_blank">java</a></li>
              <li  role="presentation"><a href="http://wenda.golaravel.com" title="Laravel问答社区"  target="_blank">web前端</a></li>
              <li  role="presentation"><a href="/laravel/docs/" title="Laravel 中文文档" target="_blank">专题</a></li>
              <li  role="presentation"><a href="/post/laravel-documents-offline-package/" title="下载 Laravel 中文文档离线版">转载</a></li>
              <li  role="presentation"><a href="http://www.laravel.com/api/" title="Laravel 框架 API" target="_blank">生活</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- end navigation -->

</template>
<script>
  export default {
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    }
  }
</script>
<style>
</style>
