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
        <span class="post-date">{{item.updateTime}}</span>
      </div>
    </div>
    <div class="featured-media" v-if="item.img">
      <a v-link="{ name: 'post', params: { id: item.id }}">
        <img v-bind:src="item.img" alt="{{item.title}}">
      </a>
    </div>
    <div class="post-content">
      <p>{{item.summary}}</p>
    </div>
    <div class="post-permalink">
      <a v-link="{ name: 'post', params: { id: item.id }}" class="btn btn-default">阅读全文</a>
    </div>

    <footer class="post-footer clearfix">
      <div class="pull-left tag-list">
        <i class="fa fa-folder-open-o"></i>
        <a v-link="{ name: 'tag', params: { id: tag.id }}" v-for="tag in item.tags">
           {{tag.label}}
        </a>
      </div>
      <div class="pull-right share">
      </div>
    </footer>
  </article>
</template>

<style>
  @import "../assets/css/github-markdown.css";
</style>

<script>

  export default{
    props: ['item']
  }
</script>
