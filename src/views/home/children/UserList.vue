<template>
  <br />
  <el-form class="search-bar">
    <el-input>
      <template #append>
        <el-button :icon="Search" @click="handleSearch" type="primary" />
      </template>
    </el-input>
  </el-form>
  <br />
  <el-table
    :data="
      tableData.data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    "
    border
    style="width: 100%"
  >
    <el-table-column prop="title" label="楼盘名称" />
    <el-table-column prop="type" label="使用类型" />
    <el-table-column prop="num" label="门牌号" />
    <el-table-column prop="houseType" label="户型" />
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
import { Search } from '@element-plus/icons-vue'
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
const handleSearch = () => {}
const tableData = reactive({
  data: []
})
onMounted(() => {
  link(apiUrl.userData, 'get', {}).then((ok: any) => {
    tableData.data = ok.data
  })
})
</script>

<style lang="scss" scoped>
.search-bar {
  width: 300px;
}
</style>
