<template>
  <div v-show="show">
    <div class="loading">
    </div>
  </div>
</template>
<script>
  export default {
    replace: true,
    props: ['text', "show"]
  }
</script>
<style>
</style>
