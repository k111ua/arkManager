<template>
  <div class="filter">
    <el-form :model="form">
      <ModuleSteps @step="m1"></ModuleSteps>
      <ModuleSteps @step="m2"></ModuleSteps>
      <div class="action">
        <el-button @click="resetForm()">清空筛选条件</el-button>
      </div>
    </el-form>
  </div>
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

  <el-pagination
    background
    hide-on-single-page
    layout="prev, pager, next"
    v-model:currentPage="currentPage"
    v-model:page-size="pageSize"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :total="tableTotal"
  />
</template>

<script lang="ts" setup>
import link from '@/api/Link'
import apiUrl from '@/api/url'
import { onMounted, reactive, ref } from 'vue'
import ModuleSteps from '@/components/ModuleSteps.vue'

const currentPage = ref(1)
const pageSize = ref(6)
const tableTotal = ref(1)

//表单数据
const form = reactive({
  m1: '',
  m2: ''
})

const m1 = (a) => {
  form.m1 = a.value - 1
  handleChange()
}
const m2 = (b) => {
  form.m2 = b.value - 1
  handleChange()
}

//表单数据初始化
const table = reactive({
  data: []
})

//axios返回数据初始化
const response = reactive({
  data: []
})

//删除行，暂时用return阻止数据库内删除
const deleteRow = (index: number) => {
  const currentId = table.data[index].id
  table.data.splice(index, 1)
  return
  link(apiUrl.accountData + '/' + currentId, 'delete', {}, {}).then(
    (ok: any) => {
      if (ok.data.length !== 0) {
        //console.log(ok.data)
      } else {
      }
    }
  )
}
const handleChange = () => {
  const params = {}
  if (form.m1 !== '') {
    params.m1 = form.m1
  }
  if (form.m1 !== '') {
    params.m2 = form.m2
  }
  link(apiUrl.any + 'passenger', 'get', {}, params).then((ok: any) => {
    tableTotal.value = ok.data.length
    if (ok.data.length !== 0) {
      response.data = ok.data
      pageDevide()
    } else {
      table.data = []
    }
  })
}

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  // console.log(`current page: ${val}`)
  currentPage.value = val
  pageDevide()
  // console.log(sliceStart, sliceEnd)
  // console.log(currentPage.value)

  //console.log(currentPage.value)
}

const resetForm = () => {
  form.m1 = ''
  form.m2 = ''
  handleChange()
}

//分页，使reactive变量响应
const pageDevide = () => {
  table.data = response.data.slice(
    (currentPage.value - 1) * pageSize.value,
    currentPage.value * pageSize.value
  )
}
onMounted(() => {
  link(apiUrl.any + 'passenger', 'get', {}, {}).then((ok: any) => {
    tableTotal.value = ok.data.length
    if (ok.data.length !== 0) {
      response.data = ok.data
      pageDevide()
    } else {
      table.data = []
    }
  })
})
</script>

<style lang="scss" scoped>
.filter {
  //border: 1px solid var(--el-border-color);
  //padding: 12px 16px;
  margin-bottom: 16px;
  .el-form {
    display: flex;
    .el-form-item {
      margin-bottom: 0;
      margin-right: 12px;
    }
    .action {
      display: flex;
      flex: 1;
      justify-content: flex-end;
    }
    .el-select {
      width: 120px;
    }
  }
}
.filter .el-dropdown-link {
  cursor: pointer;
  //color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.el-table .cell .owner-profile {
  position: relative;
  padding-left: 68px;
  padding-top: 4px;
  height: 56px;
  .avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    overflow: hidden;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
  }
  .owner {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    line-height: 24px;
    margin-bottom: 4px;
  }
  .tags {
    display: flex;
  }
  .el-tag {
    margin-right: 4px;
  }
}
.el-pagination {
  margin-top: 16px;
}
</style>
