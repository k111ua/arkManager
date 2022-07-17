<template>
  <el-table
    :data="
      tableData.data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    "
    border
    style="width: 100%"
  >
    <el-table-column prop="title" label="title" width="180" />
    <el-table-column prop="type" label="type" width="180" />
    <el-table-column prop="num" label="num" />

    <!-- "title": "福星惠誉拾景",
      "type": "住宅",
      "num": "2-10-1022",
      "houseType": "三室两厅",
      "id": 1 -->
  </el-table>
  <el-pagination
    v-model:currentPage="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[8, 12, 16, 20]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="tableData.data.length"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script lang="ts" setup>
import link from '@/api/Link'
import apiUrl from '@/api/url'
import { ref, onMounted, reactive } from 'vue'
const currentPage = ref(4)
const pageSize = ref(100)
const handleSizeChange = (val: number) => {
  pageSize.value = val
}
const handleCurrentChange = (val: number) => {
  currentPage.value = val
}
const tableData = reactive({
  data: []
})
onMounted(() => {
  link(apiUrl.userData, 'get', {}).then((ok: any) => {
    console.log(ok.data)
    tableData.data = ok.data
  })
})
</script>
