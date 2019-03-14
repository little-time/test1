<template>
<div class="story">
  <left-menu></left-menu>
  <div class="content-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="name"
        label="作者"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu'
export default {
  name: 'Story',
  components: { LeftMenu },
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.tableData = this.getData()
  },
  methods: {
    getData () {
      let result = []
      for (let i = 0; i < 20; i++) {
        result.push({
          id: '2016-05-02',
          title: '上海市普陀区金沙江路 1518 弄',
          name: '王小虎',
          date: '2016-05-02'
        })
      }
      return result
    }
  }
}
</script>

<style lang="less" scoped>
.story {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  .content-container {
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 10px;
    overflow: auto;
  }
}
</style>
