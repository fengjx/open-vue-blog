<template>
  <article class="post page">

    <header class="post-head">
      <h1 class="post-title">标签云</h1>
    </header>

    <section class="post-content widget">
      <div class="tag-cloud">
        <a v-link="{ name: 'tag', params: { id: tag.id }}" v-for="tag in tagsList">
          {{tag.label}}
        </a>
      </div>
    </section>

  </article>

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
        this.loadTagList();
      }
    },
    components: {
    }
  }
</script>
<style>
</style>
