<template>
  <article id="item-{{item.id}}" data-id="{{item.id}}" class="post tag-lumen tag-xin-ban-ben-fa-bu">

    <div class="post-head">
      <h1 class="post-title">
        <a v-link="{ name: 'post', params: { id: item.id }}">{{item.title}}</a>
      </h1>
      <div class="post-meta">
        <span class="author">
          作者：{{item.author}}
        </span> &bull;
        <time class="post-date" datetime="2016年1月8日星期五上午10点33分" title="2016年1月8日星期五上午10点33分">2016年1月8日</time>
      </div>
    </div>
    <div class="featured-media">
      <a v-link="{ name: 'post', params: { id: item.id }}">
        <img v-bind:src="{{item.img}}" alt="{{item.title}}">
      </a>
    </div>
    <div class="post-content">
      <p>{{item.desc}}</p>
    </div>
    <div class="post-permalink">
      <a v-link="{ name: 'post', params: { id: item.id }}" class="btn btn-default">阅读全文</a>
    </div>

    <footer class="post-footer clearfix">
      <div class="pull-left tag-list">
        <i class="fa fa-folder-open-o"></i>
        <a href="/tag/lumen/">Lumen</a>, <a href="/tag/xin-ban-ben-fa-bu/">新版本发布</a>
      </div>
      <div class="pull-right share">
      </div>
    </footer>
  </article>
</template>

<style>
</style>

<script>
  export default{
    props: ['item'],
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
    }
  }
</script>
