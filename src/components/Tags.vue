<template>
  <h4 class="title">标签云</h4>
  <div class="content tag-cloud">
    <a v-link="{ name: 'tag', params: { id: tag.id }}" v-for="tag in tags">
      {{tag.label}}
    </a>

    <a v-link="{ name: 'tagCloud'}">...</a>
  </div>

</template>
<style>
</style>
<script>
  export default{
    props: ['tags']
  }
</script>
