<template>
  <div class="common-layout">
    <el-container>
      <el-header><MainHeader></MainHeader></el-header>
      <el-container>
        <el-aside width="200px"><MainMenu></MainMenu></el-aside>
        <el-main>
          <div class="page"><router-view /></div>
        </el-main>
      </el-container>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
</script>

<style lang="scss" scoped>
.el-header {
  height: 56px;
  border-bottom: solid 1px var(--el-menu-border-color);
}
.el-breadcrumb {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.3);
  width: 100%;
}
.el-main {
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
    width: 1080px;
    margin: 0 auto;
  }
}
.el-footer {
  height: 56px;
  border-top: solid 1px var(--el-menu-border-color);
}
</style>
