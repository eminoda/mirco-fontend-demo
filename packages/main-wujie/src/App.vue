<template>
  <div id="app">
    <h2>wujie demo</h2>

    <el-menu class="el-menu-demo" mode="horizontal" :default-active="$route.path" router @select="handleSelect">
      <el-menu-item index="/wujie-home">wujie-home</el-menu-item>
      <el-menu-item index="/subApp/vue2-demo">vue2-demo</el-menu-item>
      <el-menu-item index="/subApp/react-demo" router>react-demo</el-menu-item>
    </el-menu>

    <router-view />

    <h3>Foderation Module</h3>
    <App2 />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: { App2: () => import('vue2Component/App') },
  methods: {
    handleSelect() {},
  },
  created() {
    console.log(this.$route)
  },
}
</script>

<style scoped lang="less">
/deep/.el-menu--horizontal > .el-menu-item.is-active {
  background-color: #409eff;
  color: #fff;
}
h2 {
  text-align: center;
  color: #2c3e50;
  margin: 20px;
}
</style>
