<template>
  <h4 class="title">标签云</h4>
  <div class="content tag-cloud">
    <a href="/tag/{{tag.id}}" v-for="tag in tags">
      {{tag.name}}
    </a>

    <a v-link="{ name: 'tagCloud'}">...</a>
  </div>

</template>
<style>
</style>
<script>
  export default{
    data () {
      return {
        tags: [
          {
            id: '1',
            name: '11111'
          },
          {
            id: '2',
            name: '22222'
          },
          {
            id: '3',
            name: '33333'},
          {
            id: '4',
            name: '444444'
          }
        ]
      }
    }
  }
</script>
