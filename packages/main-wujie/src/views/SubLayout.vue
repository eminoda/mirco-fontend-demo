<template>
  <div id="wujie"></div>
</template>
<script>
import { startApp } from 'wujie'
const demoList = [{ name: 'vue2-demo', url: 'http://localhost:8081/', type: 'wujie' }]
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {},
  created() {
    const appName = this.$route.params.appName
    const { name, url, type } = demoList.find((item) => appName === item.name)
    if (type === 'wujie') {
      this.$nextTick(() => {
        startApp({ name, url, el: document.querySelector('#wujie'), sync: true })
      })
    }
  },
}
</script>
<style scoped lang="less"></style>
