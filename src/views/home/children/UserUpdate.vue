<template>
  <ModuleTab></ModuleTab>
  <!-- <el-table :data="listData" stripe style="width: 100%" border>
    <el-table-column prop="owner" label="owner" />
    <el-table-column prop="state" label="state" />
    <el-table-column prop="avatar" label="avatar" />
  </el-table>
  <el-button @click="handleSearch">Active</el-button> -->
</template>

<script lang="ts" setup>
import link from '@/api/Link'
import apiUrl from '@/api/url'
import { onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'
const aaa = ref(1)
const store = useStore()
const avatarList = []
const ownerList = []
const stateList = []
const newModuleStateList = reactive([])
const listData = reactive(newModuleStateList)
const handleSearch = () => {
  //清空数据
  avatarList.splice(0, avatarList.length)
  ownerList.splice(0, ownerList.length)
  stateList.splice(0, stateList.length)
  //重新定义角色和模组编号
  const char = 'passenger'
  const moduleKey = 'm' + (store.state.currentModuleIndex + 1)
  link(apiUrl.accountData, 'get', {}, {}).then((ok: any) => {
    if (ok.data.length !== 0) {
      //console.log(ok.data)
      ok.data.forEach((i) => {
        avatarList.push(i.avatar)
      })
    } else {
    }
  })
  link(
    apiUrl.any + char + '?_sort=' + moduleKey + '&_order=desc',
    'get',
    {},
    {}
  ).then((ok: any) => {
    if (ok.data.length !== 0) {
      ok.data.forEach((i) => {
        stateList.push(i[moduleKey])
        ownerList.push(i.owner)
      })
      for (let i = 0; i < ownerList.length; i++) {
        newModuleStateList[i] = {
          owner: '',
          state: '',
          avatar: ''
        }
        newModuleStateList[i].owner = ownerList[i]
        newModuleStateList[i].state = stateList[i]
        if (avatarList.length === ownerList.length) {
          newModuleStateList[i].avatar = avatarList[i]
        }
      }
      store.commit('handleModuleStateList', newModuleStateList)
    } else {
    }
  })
}
onMounted(() => {
  //store.dispatch('updateList')
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
