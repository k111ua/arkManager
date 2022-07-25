<template>
  <div class="common-layout">
    <el-container>
      <el-header><MainHeader></MainHeader></el-header>
      <el-container>
        <el-aside width="200px"><MainMenu></MainMenu></el-aside>
        <el-main>
          <div class="page">
            <Breadcrumb></Breadcrumb>
            <div style="height: 40px"></div>
            <PageTitle>角色概览</PageTitle>
            <router-view />
          </div>
        </el-main>
      </el-container>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import PageTitle from '../../components/PageTitle.vue'
</script>

<style lang="scss" scoped>
.el-header {
  height: 56px;
  border-bottom: solid 1px var(--el-menu-border-color);
}
.el-breadcrumb {
  position: fixed;
}
.el-main {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 0;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    position: absolute;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--el-color-info-light-3);
  }
  &::-webkit-scrollbar-track {
    background-color: var(--el-color-white);
  }
  .page {
    width: 1200px;
    margin: 0 auto;
    position: relative;
  }
}
.el-footer {
  height: 56px;
  border-top: solid 1px var(--el-menu-border-color);
}
</style>
