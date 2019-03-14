<template>
<div class="menu">
  <el-menu
    :default-active="activeName"
    class="el-menu-vertical-demo"
    router>
    <el-submenu index="/admin">
      <template slot="title" index="/admin">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="/admin/story">选项1</el-menu-item>
      <el-menu-item index="/admin/book">选项2</el-menu-item>
    </el-submenu>
    <el-menu-item index="/news">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="/users">
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="/about">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: 'LeftMenu',
  computed: {
    activeName () {
      console.log(this.$route.path)
      return `${this.$route.path}`
    }
  }
}
</script>

<style lang="less" scoped>
.menu {
  width: 200px;
  height: 100%;

  .menu > ul {
    height: 100%;
  }
}
</style>
