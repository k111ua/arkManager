<template>
  <br />
  <Dialog />
  <el-form ref="searchFormRef" :model="searchForm" class="search-bar">
    <el-input v-model="searchForm.keyword">
      <template #append>
        <el-button :icon="Search" @click="handleSearch" type="primary" />
      </template>
    </el-input>
  </el-form>
  <br />
  <el-table
    :data="
      $store.state.HomeModule.listData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      )
    "
    border
    style="width: 100%"
  >
    <el-table-column prop="title" label="楼盘" />
    <el-table-column prop="type" label="用途" />
    <el-table-column prop="num" label="门牌号" />
    <el-table-column prop="houseType" label="户型" />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
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
import { useStore } from 'vuex'
const store = useStore()
const searchForm = reactive({
  keyword: ''
})
const currentPage = ref(1)
const pageSize = ref(8)
const handleSizeChange = (val: number) => {
  pageSize.value = val
}
const handleCurrentChange = (val: number) => {
  currentPage.value = val
}
const handleSearch = () => {
  link(apiUrl.userData, 'get', {}, { type: searchForm.keyword }).then(
    (ok: any) => {
      if (ok.data.length !== 0) {
        tableData.data = ok.data
      } else {
      }
    }
  )
}
const handleEdit = (index: number, row: User) => {
  store.commit('bbbb', row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}
const tableData = reactive({
  data: []
})
onMounted(() => {
  store.dispatch('updateList')
})
</script>

<style lang="scss" scoped>
.search-bar {
  width: 300px;
}
.el-pagination {
  margin-top: 12px;
}
</style>
