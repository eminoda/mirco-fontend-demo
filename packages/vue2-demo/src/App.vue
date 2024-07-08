<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <el-menu class="el-menu-demo" router mode="horizontal" :default-active="$route.path">
      <el-menu-item index="/page1">page1</el-menu-item>
      <el-menu-item index="/page2">page2</el-menu-item>
    </el-menu>

    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
