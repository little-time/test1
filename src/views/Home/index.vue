<template>
  <div class="home">
    <top-header></top-header>
    <div class="home-body">
      <left-menu></left-menu>
      <div class="content-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import TopHeader from '@/components/TopHeader'
import LeftMenu from '@/components/LeftMenu'
export default {
  name: 'home',
  components: {
    TopHeader,
    LeftMenu
  }
}
</script>
<style lang="less" scoped>
  .home {
    width: 100%;
    height: 100%;

    .home-body {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
    }

    .content-container {
      flex: 1;
      width: 100%;
      height: 100%;
      padding: 10px;
      overflow: auto;
    }
  }
</style>
