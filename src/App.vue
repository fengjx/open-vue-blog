<template>
  <header-com :tree="categoryTree"></header-com>
  <!-- start site's main content area -->
  <section class="content-wrap">
    <div class="container">
      <div class="row">
        <main class="col-md-8 main-content">
          <router-view></router-view>
        </main>

        <aside class="col-md-4 sidebar">
          <!-- start widget -->
          <!--<div class="widget">
            <ease-music></ease-music>
          </div>-->
          <!-- end widget -->

          <!-- start tag cloud widget -->
          <div class="widget">
            <tags :tags="tagsTopList"></tags>
          </div>
          <!-- end tag cloud widget -->

          <!-- start widget -->
          <div class="widget">
            <h4 class="title">社区</h4>
            <div class="content community">
              <p>QQ群：462694081</p>
              <p>
                <a href="http://wenda.golaravel.com/" title="Laravel中文网问答社区" target="_blank">
                  <i class="fa fa-comments"></i>
                  问答社区
                </a>
              </p>
            </div>
          </div>
          <!-- end widget -->
        </aside>

      </div>
    </div>
  </section>
  <footer-com></footer-com>
  <to-top></to-top>
  <alert :msg="alertMsg.msg" :show="alertMsg.show"></alert>
  <loading :show="loading.show" :text="loading.showText" ></loading>
</template>

<script>
  import HeaderCom from './components/Header.vue'
  import FooterCom from './components/Footer.vue'
  import BackToTop from './components/BackToTop.vue'
  import EaseMusic from './components/EaseMusic.vue'
  import Tags from './components/Tags.vue'
  import Alert from './components/Alert.vue'
  import Loading from './components/Loading.vue'
  import store from './vuex/store'
  import {loadTagTopList, loadCategoryTree} from './vuex/actions'
  import {alertMsg, tagsTopList, categoryTree, loading} from './vuex/getters'

  export default {
    vuex: {
      getters: {
        alertMsg,
        tagsTopList,
        categoryTree,
        loading
      },
      actions: {
        loadTagTopList,
        loadCategoryTree
      }
    },
    created: function () {
      this.loadCategoryTree();
      this.loadTagTopList();
    },
    components: {
      HeaderCom,
      FooterCom,
      toTop: BackToTop,
      EaseMusic,
      Tags,
      Alert,
      Loading
    },
    store
  }
</script>
<style>
</style>
