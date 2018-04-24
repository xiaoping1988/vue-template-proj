<template>
  <div class="p-layout" id="p-layout">
    <!-- 头部导航 -->
    <PHead></PHead>
    <!-- 左菜单导航 -->
    <slot></slot>
    <!-- 右边页面 -->
    <div class="p-page-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PLayout'
  }
</script>

<style scoped>

</style>
