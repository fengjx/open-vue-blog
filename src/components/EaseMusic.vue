<template>
  <h4 class="title">我的音乐</h4>
  <div class="content community">
    <iframe
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      width={{easeMusic.width}}
      height={{easeMusic.height}}
      v-bind:src="easeMusic.url"
    >
    </iframe>
  </div>
</template>
<style>
</style>
<script>
  import {easeMusic} from '../vuex/getters'
  export default{
    vuex: {
      getters: {
        easeMusic
      }
    }
  }
</script>
