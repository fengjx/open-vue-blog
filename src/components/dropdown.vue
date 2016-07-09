<template>
  <li class="dropdown" v-bind:class="{ 'open': isOpen, 'active': isActive}">
    <a @click="expanded"
       href="javascript:;"
       class="dropdown-toggle"
       data-toggle="dropdown"
       role="button"
       aria-haspopup="true"
       aria-expanded="{{ariaExpanded}}">
      {{menu.name}}
      <span class="caret"></span>
    </a>
    <ul class="dropdown-menu">
      <li v-for="c in menu.children">
        <a v-link="{name:'category', params: {id: c.id}}">
          {{c.name}}
        </a>
      </li>
    </ul>
  </li>
</template>
<style>
</style>
<script>
  export default{
    props: ['menu'],
    data(){
      return {
        isActive: false,
        isOpen: false,
        ariaExpanded: false
      }
    },
    methods: {
      expanded: function () {
        this.isOpen = !this.isOpen;
        this.ariaExpanded = !this.ariaExpanded;
      }
    },
    components: {}
  }
</script>
