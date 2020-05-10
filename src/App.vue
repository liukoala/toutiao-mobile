<template>
  <div id="app">
    <!-- 一级路由的出口，路由表中所有的顶层路由都是一级路由 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.box {
  width: 200px;
  height: 100px;
  background-color: pink;
}
</style>
