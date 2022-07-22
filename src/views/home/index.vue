<template>
  <div class="common-layout">
    <el-container>
      <el-header><MainHeader></MainHeader></el-header>
      <el-container>
        <el-aside width="200px"><MainMenu></MainMenu></el-aside>
        <el-main>
          <Breadcrumb></Breadcrumb>
          <router-view />
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
.el-footer {
  height: 56px;
  border-top: solid 1px var(--el-menu-border-color);
}
</style>
