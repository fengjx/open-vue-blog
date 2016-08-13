<template>
  <header-com :tree="categoryTree" :curmenu="categoryCurMenu"></header-com>
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
            <h4 class="title">优惠码</h4>
            <div class="content community">
              <p><a href="https://www.aliyun.com" target="_blank">阿里云</a>：o2gi8h</p>
            </div>
          </div>
          <!-- end widget -->

          <!-- start widget -->
          <div class="widget">
            <h4 class="title">关于我</h4>
            <div class="content community">
              <p>QQ：466516623</p>
              <p>email：xd-fjx@qq.com</p>
              <p>
                <a href="http://fengjx.com/me" title="冯建新" target="_blank">
                  <i class="fa fa-comments"></i>
                  个人主页
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
  import {loadTagList, loadCategoryTree} from './vuex/actions'
  import {alertMsg, tagsTopList, categoryTree, categoryCurMenu, loading} from './vuex/getters'

  export default {
    vuex: {
      getters: {
        alertMsg,
        tagsTopList,
        categoryTree,
        categoryCurMenu,
        loading
      },
      actions: {
        loadTagList,
        loadCategoryTree
      }
    },
    created: function () {
      this.loadCategoryTree();
      this.loadTagList();
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
