<template>
  <header-com></header-com>
  <!-- start site's main content area -->
  <section class="content-wrap">
    <div class="container">
      <div class="row">

        <post-list></post-list>

        <aside class="col-md-4 sidebar">
          <!-- start widget -->
          <div class="widget">
              <ease-music></Ease-Music>
          </div>
          <!-- end widget -->

          <!-- start tag cloud widget -->
          <div class="widget">
            <tag-cloud></tag-cloud>
          </div>
          <!-- end tag cloud widget -->

          <!-- start widget -->
          <div class="widget">
            <h4 class="title">社区</h4>
            <div class="content community">
              <p>QQ群：462694081</p>
              <p><a href="http://wenda.golaravel.com/" title="Laravel中文网问答社区" target="_blank" onclick="_hmt.push(['_trackEvent', 'big-button', 'click', '问答社区'])"><i class="fa fa-comments"></i> 问答社区</a></p>
            </div>
          </div>
          <!-- end widget -->
        </aside>

      </div>
    </div>
  </section>

</template>

<script>
  import HeaderCom from '../components/Header.vue'
  import PostList from '../components/PostList.vue'
  import EaseMusic from '../components/EaseMusic.vue'
  import TagCloud from '../components/TagCloud.vue'

  export default {
    components: {
      HeaderCom,
      PostList,
      EaseMusic,
      TagCloud
    }
  }
</script>
<style>
</style>
