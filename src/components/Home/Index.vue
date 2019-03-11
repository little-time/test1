<template>
    <div style="height:900px;padding:0;margin:0;">
      <top-header></top-header>
      <div class="midlle">
        <left-menu></left-menu>
        <div class="left">
            <div class="left-head">
               <h5 style="margin:0 30px">首页</h5>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import TopHeader from '../commom/TopHeader'
import LeftMenu from '../commom/LeftMenu'
export default {
  name: 'Home',
  components: {
    TopHeader,
    LeftMenu
  }
}

</script>

<style lang="less" scoped>
.midlle{
  padding: 0;
  margin: 0;
  height: calc(~'100vh - 100px');
}
.left{
padding: 0;
margin: 0;
width: 83.33%;
float: right;
}
.left-head{
  height: 30px;
  background: #A1A1A1;
}
</style>
