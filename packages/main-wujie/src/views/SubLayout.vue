<template>
  <div id="wujie"></div>
</template>
<script>
import { startApp } from 'wujie'
const demoList = [
  { name: 'vue2-demo', url: 'http://localhost:8081', type: 'wujie' },
  { name: 'react-demo', url: 'http://localhost:8082', type: 'wujie' },
]
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {
    loadApp(appName) {
      const { name, url, type } = demoList.find((item) => appName === item.name)
      if (type === 'wujie') {
        startApp({ name, url, el: document.querySelector('#wujie'), sync: true })
      }
    },
  },
  watch: {
    $route(newVal) {
      const appName = newVal.params.appName
      this.loadApp(appName)
    },
  },
  mounted() {
    this.loadApp(this.$route.params.appName)
  },
}
</script>
<style scoped lang="less"></style>
