<template>
  <div class="filter">
    <el-form :model="form">
      <el-form-item>
        <el-select
          @change="handleChange"
          v-model="form.state"
          clearable
          placeholder="状态"
        >
          <el-option label="空闲" value="空闲" />
          <el-option label="使用中" value="使用中" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select
          @change="handleChange"
          v-model="form.server"
          clearable
          placeholder="服务器"
        >
          <el-option label="官服" value="官服" />
          <el-option label="B服" value="B服" />
        </el-select>
      </el-form-item>
      <div class="action">
        <el-button @click="resetForm()">清空筛选条件</el-button>
      </div>
    </el-form>
  </div>
  <el-table :data="table.data" stripe style="width: 100%" border>
    <!-- <el-table-column prop="id" label="#" type="index" width="50" /> -->
    <!-- <el-table-column prop="avatar" label="avatar" /> -->
    <el-table-column label="账号" width="300">
      <template #default="scope">
        <div class="owner-profile" width="300">
          <img
            class="avatar"
            :src="
              scope.row.avatar
                ? scope.row.avatar
                : 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
            "
          />
          <div class="owner">{{ scope.row.owner }}</div>
          <div class="tags" v-if="scope.row.tag.length !== 0">
            <el-tag size="small" v-for="item in scope.row.tag">
              {{ item }}
            </el-tag>
            <!-- <div class="tag" v-for="item in scope.row.tag">{{ item }}</div> -->
          </div>
          <div class="tags" v-else>
            <el-tag size="small">underfine</el-tag>
            <!-- <div class="tag" v-for="item in scope.row.tag">{{ item }}</div> -->
          </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="contract" label="联系人" />
    <!-- <el-table-column prop="potential" label="潜能" width="80" /> -->
    <!-- <el-table-column prop="master" label="专精" width="80" /> -->
    <!-- <el-table-column label="图鉴" width="80">
      <template #default="scope">
        <el-progress
          :text-inside="true"
          :stroke-width="24"
          :percentage="scope.row.collection.replace('%', '')"
        />
      </template>
    </el-table-column> -->
    <el-table-column prop="state" label="状态" />
    <el-table-column prop="duration" label="状态时长" />
    <el-table-column prop="server" label="服务器" />
    <el-table-column prop="user" label="谁在用" />
    <el-table-column prop="tip" label="备注" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          link
          type="danger"
          size="small"
          @click.prevent="deleteRow(scope.$index)"
        >
          删除
        </el-button>
        <el-button link type="primary" size="small" @click.prevent="">
          借用
        </el-button>
      </template>
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

const currentPage = ref(1)
const pageSize = ref(6)
const tableTotal = ref(1)

//表单数据
const form = reactive({
  server: '',
  state: ''
})

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
  if (form.server !== '') {
    params.server = form.server
  }
  if (form.state !== '') {
    params.state = form.state
  }
  link(apiUrl.accountData, 'get', {}, params).then((ok: any) => {
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
  form.server = ''
  form.state = ''
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
  link(apiUrl.accountData, 'get', {}, {}).then((ok: any) => {
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
