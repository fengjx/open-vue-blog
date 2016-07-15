<template>
  <article id="61" class="post tag-lumen tag-xin-ban-ben-fa-bu">
    <header class="post-head">
      <h1 class="post-title">{{postDetail.title}}</h1>
      <section class="post-meta">
        <span class="author">
          作者：<a href="javascript:;">{{postDetail.author}}</a>
        </span> &bull;
        <time class="post-date" title="{{postDetail.updateTime}}">{{postDetail.updateTime}}</time>
      </section>
    </header>

    <section class="featured-media" v-if="postDetail.img">
      <img v-bind:src="postDetail.img" alt="{{postDetail.title}}">
    </section>

    <section class="markdown-body post-content" v-html="postDetail.content">

    </section>

    <footer class="post-footer clearfix">
      <div class="pull-left tag-list">
        <i class="fa fa-folder-open-o"></i>
        <a v-link="{ name: 'tag', params: { id: tag.id }}" v-for="tag in postDetail.tags">
          {{tag.label}}
        </a>
      </div>
    </footer>

  </article>

  <div class="about-author clearfix" v-if="postDetail.originalLink">
    <a href="{{postDetail.originalLink}}">
      <img src="http://image.golaravel.com/6/d4/82b9646073bef7a7d67c6cd1db987.png" alt="王赛"
           class="avatar pull-left">
    </a>

    <div class="details">
      <div class="author">
        原文链接
        <p>
          <a href="{{postDetail.originalLink}}" target="_blank">{{postDetail.originalLink}}</a>
        </p>
      </div>
    </div>
  </div>

</template>
<style>
</style>
<script>
  import {loadPost} from '../vuex/actions'
  import {postDetail} from '../vuex/getters'

  export default{
    data () {
      return {}
    },
    vuex: {
      getters: {
        postDetail
      },
      actions: {
        loadPost
      }
    },
    route: {
      data (transition) {
        let id = transition.to.params.id;
        this.loadPost(id);
      }
    },
    components: {}
  }
</script>
