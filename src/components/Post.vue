<template>
  <article id="61" class="post tag-lumen tag-xin-ban-ben-fa-bu">
    <header class="post-head">
      <h1 class="post-title">Lumen 5.2 正式发布</h1>
      <section class="post-meta">
        <span class="author">作者：<a href="/author/wangsai/">王赛</a></span> &bull;
        <time class="post-date" datetime="2016年1月8日星期五上午10点33分" title="2016年1月8日星期五上午10点33分">2016年1月8日</time>
      </section>
    </header>

    <section class="featured-media">
      <img src="http://image.golaravel.com/e/d5/0dd5c3a731c98638a076afe8ce6de.png" alt="Lumen 5.2 正式发布">
    </section>

    <section class="post-content">
      <p>Lumen 5.2.0 已经正式发布了！此次发布的版本包含了 Laravel 5.2 的组件并在核心理念上做了重大改变。</p>

      <p>建议所有 Lumen 用户阅读相关文档了解以下所提到的改变：</p>

      <h2 id="api">专注提供无状态的 API 服务</h2>

      <p>Lumen 5.2 对 Lumen 进行了大瘦身专注于，并且将专注提供无状态的 JSON API 服务。因此，Lumen 框架将不再包含Session和视图（View）。如果你需要使用这些功能，请用完整的
        Laravel 框架。将 Lumen 应用升级到完整的 Laravel 应用只需：将你自己开发的代码拷贝到全新安装的 Laravel 项目中，仅此而已！由于 Laravel 和 Lumen
        中的很多组件是共用的，因此，你自己编写的代码根本无须修改。</p>

      <h2 id="">认证</h2>

      <p>由于 session 不再包含在 Lumen 中，因此，认证（authentication）必须通过 API token 或者请求头来实现无状态化。在全新实现的 AuthServiceProvider
        中你对认证过程拥有完全的控制权。请查看 Lumen 中关于认证（authentication）的文档以了解更多信息。</p>

      <h2 id="">测试辅助功能</h2>

      <p>由于 Lumen 不再包含 session 和视图，因此所有关于表单交互的测试辅助代码（testing helper）都被删除了。于 JSON API 相关的测试辅助代码仍然保留了下来，请查看 Lumen
        关于测试方面的文档以了解更多信息。</p>

      <p>文档地址： <a href="https://lumen.laravel.com/docs/5.2/releases">Lumen 5.2 官方文档</a>。</p>

      <p>－－－</p>

      <p>原文地址：<a href="https://laravel-news.com/2016/01/lumen-5-2-is-released/">https://laravel-news.com/2016/01/lumen-5-2-is-released/</a>
      </p>
    </section>

    <footer class="post-footer clearfix">
      <div class="pull-left tag-list">
        <i class="fa fa-folder-open-o"></i>
        <a href="/tag/lumen/">Lumen</a>, <a href="/tag/xin-ban-ben-fa-bu/">新版本发布</a>
      </div>

      <div class="pull-right share">
        <div class="bdsharebuttonbox share-icons">
          <a href="#" class="bds_more" data-cmd="more"></a>
          <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
          <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
          <a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
          <a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
          <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
        </div>
      </div>
    </footer>

  </article>

  <div class="about-author clearfix">
    <a href="/author/wangsai/"><img src="http://image.golaravel.com/6/d4/82b9646073bef7a7d67c6cd1db987.png" alt="王赛"
                                    class="avatar pull-left"></a>

    <div class="details">
      <div class="author">
        关于作者 <a href="/author/wangsai/">王赛</a>
      </div>
      <div class="meta-info">
        <span class="loaction"><i class="fa fa-home"></i>北京</span>
        <span class="website"><i class="fa fa-globe"></i><a href="http://www.bootcss.com/"
                                                            targer="_blank">个人网站/博客</a></span>
      </div>
    </div>
  </div>

  <div class="prev-next-wrap clearfix">

    <a class="btn btn-default" href="/post/laravel-5-2-zheng-shi-fa-bu/"><i class="fa fa-angle-left fa-fw"></i>
      Laravel 5.2 正式发布</a>
    &nbsp;
  </div>

</template>
<style>
</style>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
