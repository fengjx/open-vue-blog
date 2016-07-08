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

    <section class="markdown-body post-content" v-html="html">

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

  <div class="prev-next-wrap clearfix">
    <a class="btn btn-default" href="/post/laravel-5-2-zheng-shi-fa-bu/"><i class="fa fa-angle-left fa-fw"></i>
      Laravel 5.2 正式发布</a>
    &nbsp;
  </div>

</template>
<style>
</style>
<script>
  import md from 'markdown';
  import {loadPost} from '../vuex/actions'
  import {postDetail} from '../vuex/getters'

  export default{
    data () {
      return {
      }
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
    computed: {
      html: function () {
        return md.parse(this.postDetail.content);
      }
    },
    components: {
    }
  }
</script>
