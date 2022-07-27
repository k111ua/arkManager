<template>
  <el-form></el-form>
  <el-table :data="table.data" stripe style="width: 100%" border>
    <el-table-column prop="id" label="#" type="index" width="50" />
    <el-table-column prop="owner" label="账号" />
    <el-table-column prop="potential" label="潜能" />
    <el-table-column label="专精">
      <el-table-column prop="s1" label="1技能" />
      <el-table-column prop="s2" label="2技能" />
      <el-table-column prop="s3" label="3技能" />
    </el-table-column>
    <el-table-column label="模组进度">
      <el-table-column prop="m1" label="模组1" />
      <el-table-column prop="m2" label="模组2" />
    </el-table-column>
    <el-table-column label="操作">
      <div class="action-column">
        <el-button type="primary" link>使用</el-button>
        <el-button type="primary" link>预约</el-button>
      </div>
    </el-table-column>
  </el-table>
  <!-- <el-button @click="handleSearch">Active</el-button> -->
</template>

<script lang="ts" setup>
import link from '@/api/Link'
import apiUrl from '@/api/url'
import { onMounted, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
const store = useStore()
const avatarList = []
const ownerList = []
const stateList = []
const newModuleStateList = reactive([])
const listData = reactive(newModuleStateList)
const table = reactive({
  data: []
})
const handleSearch = () => {
  //清空数据
  avatarList.splice(0, avatarList.length)
  ownerList.splice(0, ownerList.length)
  stateList.splice(0, stateList.length)
  //重新定义角色和模组编号
  const char = 'passenger'
  const moduleKey = 'm' + (store.state.currentModuleIndex + 1)
  link(apiUrl.any + char, 'get', {}, {}).then((ok: any) => {
    if (ok.data.length !== 0) {
      table.data = ok.data
    } else {
    }
  })
}
onMounted(() => {
  const char = 'vigna'
  const moduleKey = 'm' + (store.state.currentModuleIndex + 1)
  link(apiUrl.any + char, 'get', {}, {}).then((ok: any) => {
    if (ok.data.length !== 0) {
      table.data = ok.data
    } else {
    }
  })
})
</script>

<style lang="scss" scoped>
.search-bar {
  width: 300px;
}
.el-pagination {
  margin-top: 12px;
}
.action-column {
  display: flex;
}
</style>
