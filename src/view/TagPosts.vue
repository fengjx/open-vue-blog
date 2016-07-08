<template>
  <div class="cover tag-cover">
    <h3 class="tag-name">
      标签：Composer
    </h3>
    <div class="post-count">
      共 3 篇文章
    </div>
  </div>

  <article id=53 class="post tag-composer tag-jing-xiang featured">
    <div class="featured" title="推荐文章">
      <i class="fa fa-star"></i>
    </div>

    <div class="post-head">
      <h1 class="post-title"><a href="/post/packagist-composer-chinese-mirror-reloaded/">Packagist/Composer
        中国全量镜像重装上阵</a></h1>
      <div class="post-meta">
        <span class="author">作者：<a href="/author/wangsai/">王赛</a></span> &bull;
        <time class="post-date" datetime="2015年8月13日星期四晚上7点06分" title="2015年8月13日星期四晚上7点06分">2015年8月13日</time>
      </div>
    </div>
    <div class="post-content">
      <p>此文转载自：Composer 中文网 原文地址：Packagist/Composer 中国全量镜像重装上阵 配置镜像的方法：http://pkg.phpcomposer.com/ 其实，Packagist/Composer
        中国全量镜像一个月前就已经脱胎换骨、重装上阵了，经过这一个月来的洗礼（内测 +</p>
    </div>
    <div class="post-permalink">
      <a href="/post/packagist-composer-chinese-mirror-reloaded/" class="btn btn-default">阅读全文</a>
    </div>

    <footer class="post-footer clearfix">
      <div class="pull-left tag-list">
        <i class="fa fa-folder-open-o"></i>
        <a href="/tag/composer/">Composer</a>, <a href="/tag/jing-xiang/">镜像</a>
      </div>
      <div class="pull-right share">
      </div>
    </footer>
  </article>
  <article id=8 class="post tag-composer">

    <div class="post-head">
      <h1 class="post-title"><a
        href="/post/shi-yong-composer-zhong-guo-jing-xiang-an-zhuang-shi-bao-zhao-bu-dao-bao-de-cuo-wu-jie-jue/">使用Composer
        中国镜像安装时报找不到包的错误解决</a></h1>
      <div class="post-meta">
        <span class="author">作者：<a href="/author/anzhengchao/">Overtrue</a></span> &bull;
        <time class="post-date" datetime="2014年9月23日星期二下午4点32分" title="2014年9月23日星期二下午4点32分">2014年9月23日</time>
      </div>
    </div>
    <div class="post-content">
      <p>在第一次试用composer中国镜像时遇到一个错误，报错Your requirements could not be resolved to an installable set of packages。报错详情如下：
        后来各种找不到原因，后来更新了一下composer版本(命令：composer selfupdate</p>
    </div>
    <div class="post-permalink">
      <a href="/post/shi-yong-composer-zhong-guo-jing-xiang-an-zhuang-shi-bao-zhao-bu-dao-bao-de-cuo-wu-jie-jue/"
         class="btn btn-default">阅读全文</a>
    </div>

    <footer class="post-footer clearfix">
      <div class="pull-left tag-list">
        <i class="fa fa-folder-open-o"></i>
        <a href="/tag/composer/">Composer</a>
      </div>
      <div class="pull-right share">
      </div>
    </footer>
  </article>
  <article id=2 class="post tag-composer tag-installation">

    <div class="post-head">
      <h1 class="post-title"><a href="/post/laravel-installation-guide/">Laravel 安装指南</a></h1>
      <div class="post-meta">
        <span class="author">作者：<a href="/author/xsmyqf/">谢帅</a></span> &bull;
        <time class="post-date" datetime="2013年12月16日星期一下午3点55分" title="2013年12月16日星期一下午3点55分">2013年12月16日</time>
      </div>
    </div>
    <div class="post-content">
      <p>Git 介绍 之所以要说 Git，就是因为 Composre 有时需要用到 Git，还是安装上比较好，Composer 暂且不表，先来了解一下 Git 吧（已经安装的童鞋跳过这里，直接看 Composer介绍） Git
        是一个快速、可扩展的分布式版本控制系统。好，介绍就到这里，详细的可以到 Git 官网 去了解更多，我</p>
    </div>
    <div class="post-permalink">
      <a href="/post/laravel-installation-guide/" class="btn btn-default">阅读全文</a>
    </div>

    <footer class="post-footer clearfix">
      <div class="pull-left tag-list">
        <i class="fa fa-folder-open-o"></i>
        <a href="/tag/composer/">Composer</a>, <a href="/tag/installation/">安装</a>
      </div>
      <div class="pull-right share">
      </div>
    </footer>
  </article>


  <nav class="pagination" role="navigation">
    <span class="page-number">第 1 页 &frasl; 共 1 页</span>
  </nav>

</template>

<script>
  import {loadTagList} from '../vuex/actions'
  import {tagsList} from '../vuex/getters'

  export default{
    data () {
      return {
        page: 1
      }
    },
    vuex: {
      getters: {
        tagsList
      },
      actions: {
        loadTagList
      }
    },
    route: {
      data () {
      }
    },
    components: {}
  }
</script>
<style>
</style>
