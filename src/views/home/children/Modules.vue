<template>
  <ModuleTab></ModuleTab>
  <ModuleSteps
    v-for="item in $store.state.moduleStateList"
    :owner="item.owner"
    :state="item.state"
    :avatarPath="item.avatarPath"
  ></ModuleSteps>
  <el-button @click="handleSearch">Active</el-button>
</template>

<script lang="ts" setup>
import link from '@/api/Link'
import apiUrl from '@/api/url'
import { ref, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const searchForm = reactive({
  keyword: ''
})
const handleSearch = () => {
  link(apiUrl.passenger, 'get', {}, {}).then((ok: any) => {
    if (ok.data.length !== 0) {
      console.log(ok.data)

      const charList = ok.data[0].charList
      const ownerList = []
      const currentCharStateList = []
      const moduleKey = 'm' + (store.state.currentModuleIndex + 1)
      ok.data.forEach((item) => {
        ownerList.push(item.owner)
        const v = item.charList.filter((element) => {
          return element.char === 'passenger'
        })[0]
        console.log(v)
        currentCharStateList.push(v[moduleKey])
      })
      console.log(ownerList)
      console.log(currentCharStateList)

      //console.log(
      //   ok.data[0].charList.filter((element) => {
      //     return element.char === 'passenger'
      //   })
      // )

      const currentChar = charList.filter((item) => {
        return item.char === 'passenger'
      })[0]
      //const moduleKey = 'm' + (store.state.currentModuleIndex + 1)
      console.log(currentChar[moduleKey].state)
      console.log(currentChar[moduleKey].type)
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
