<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: 'home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>角色概览</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  position: fixed;
  line-height: 20px;
  padding: 10px 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  z-index: 999;
}
</style>
