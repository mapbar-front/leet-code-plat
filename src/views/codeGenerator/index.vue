<template>
  <div class="code-generator-container">
    <el-row :gutter="20">
      <el-col :span="4">
        <TableEditor @change="setTableData" />
      </el-col>
      <el-col :span="20">
        <TableExhibition :table-data="tableData" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TableEditor from './components/TableEditor'
import TableExhibition from './components/TableExhibition'
export default {
  name: 'PageHello',
  data () {
    return {
      tableData: {}
    }
  },
  methods: {
    setTableData (val) {
      this.tableData = JSON.parse(val)
    }
  },
  components: {
    TableEditor,
    TableExhibition
  },
  mounted () {
    console.log(this.$store)
  }
}
</script>
<style lang="less" scoped>
.code-generator-container {
  padding: 20px;
}
</style>
