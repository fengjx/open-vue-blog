<template>
  <div id="app">
    <header-com></header-com>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import HeaderCom from './components/Header.vue'

export default {
  components: {
    Hello,
    HeaderCom
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

</style>
