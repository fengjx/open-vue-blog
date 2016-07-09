<template>
    <div>
      <a v-bind:style="styleObject" href="#" id="back-to-top"
         @click.prevent.stop="toTop">
        <i class="fa fa-angle-up fa-2x"></i>
      </a>
    </div>
</template>
<style>
</style>
<script>
  export default {
    data() {
      return {
        styleObject: {
          display: 'block'
        }
      };
    },
    methods: {
      toTop() {
        document.body.scrollTop = 0;
      }
    },
    ready() {
      window.onscroll = () => {
        let show = document.body.scrollTop > 400;
        this.styleObject.display = show? 'block' : 'none';
      }
    },
    beforeDestory() {
      window.onscroll = null;
    }
  };
</script>
