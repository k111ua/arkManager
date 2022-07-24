<template>
  <div class="header">
    <div class="logo"></div>
    <el-input placeholder="输入角色或模组搜索" class="searchbar">
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input>
    <div class="action-area">
      <el-avatar :size="36" :src="circleUrl" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { reactive, toRefs } from 'vue'

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})

const { circleUrl } = toRefs(state)
</script>

<style lang="scss" scoped>
.header {
  height: 55px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  .logo {
    background: url(@/assets/images/logo.png) no-repeat left center;
    width: 240px;
    height: 36px;
    background-size: auto 36px;
  }
  .searchbar {
    width: 480px;
    height: 36px;
  }
  .action-area {
    width: 240px;
    height: 36px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
