<template>
  <div id="app">
    <h2>wujie demo</h2>

    <el-menu class="el-menu-demo" mode="horizontal" router @select="handleSelect">
      <el-menu-item index="/wujie-home">wujie-home</el-menu-item>
      <el-menu-item index="/subApp/vue2-demo">vue2-demo</el-menu-item>
      <el-menu-item index="react-demo" router>react-demo</el-menu-item>
    </el-menu>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleSelect(key) {
      console.log(key)
    },
  },
}
</script>

<style>
h2 {
  text-align: center;
  color: #2c3e50;
  margin: 20px;
}
</style>
