<template>
  <div class="news">
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
</template>

<script>
export default {
  name: 'News',
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

<style scoped>

</style>
