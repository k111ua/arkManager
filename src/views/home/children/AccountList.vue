<template>
  <el-table :data="table.data" stripe style="width: 100%" border>
    <!-- <el-table-column prop="id" label="#" type="index" width="50" /> -->
    <!-- <el-table-column prop="avatar" label="avatar" /> -->
    <el-table-column label="账号">
      <template #default="scope">
        <div class="owner-profile">
          <img class="avatar" :src="scope.row.avatar" />
          <div class="owner">{{ scope.row.owner }}</div>
          <div class="tags">
            <el-tag size="small" v-for="item in scope.row.tag">
              {{ item }}
            </el-tag>
            <!-- <div class="tag" v-for="item in scope.row.tag">{{ item }}</div> -->
          </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="contract" label="联系人" />
    <!-- <el-table-column prop="potential" label="潜能" width="80" />
    <el-table-column prop="master" label="专精" width="80" />
    <el-table-column prop="collection" label="图鉴" width="80" /> -->
    <!-- <el-table-column prop="state" label="状态" />
    <el-table-column prop="duration" label="状态时长" />
    <el-table-column prop="user" label="谁在用" /> -->
    <el-table-column prop="tip" label="备注" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="deleteRow(scope.$index)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import link from '@/api/Link'
import apiUrl from '@/api/url'
import { onMounted, reactive } from 'vue'
const table = reactive({
  data: []
})
const deleteRow = (index: number) => {
  const currentId = table.data[index].id
  table.data.splice(index, 1)
  //console.log(index)
  console.log(currentId)
  link(apiUrl.accountData + '/' + currentId, 'delete', {}, {}).then(
    (ok: any) => {
      if (ok.data.length !== 0) {
        console.log(ok.data)
      } else {
      }
    }
  )
}
onMounted(() => {
  link(apiUrl.accountData, 'get', {}, {}).then((ok: any) => {
    if (ok.data.length !== 0) {
      table.data = ok.data
    } else {
    }
  })
})
</script>

<style lang="scss" scoped>
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
</style>
