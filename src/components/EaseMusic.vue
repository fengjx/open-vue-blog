<template>
  <h4 class="title">我的音乐</h4>
  <div class="content community">
    <iframe
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      width=308
      height=450
      src="http://music.163.com/outchain/player?type=0&id=365546314&auto=1&height=430"
    >
    </iframe>
  </div>
</template>
<style>
</style>
<script>
  export default{
    props: ['musicUrl']
  }
</script>
