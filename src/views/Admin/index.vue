<template>
  <div class="admin">
    <top-header></top-header>
    <div class="admin-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import TopHeader from '@/components/TopHeader'

export default {
  name: 'admin',
  components: {
    TopHeader
  }
}
</script>
<style lang="less" scoped>
  .home {
    width: 100%;
    height: 100%;

    .admin-body {
      width: 100%;
      height: 100%;
    }

    .content-container {
      width: 100%;
      height: 100%;
    }
  }
</style>
