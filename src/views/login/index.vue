<template>
  <div class="login-panel">
    <div class="tab-bar">
      <router-link to="/entry/login" class="tab-link">登录</router-link>
      <router-link to="/entry/register" class="tab-link">注册</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.login-panel {
  width: 400px;
  margin: 200px auto 0 auto;
}
.tab-bar {
  display: flex;
  margin-bottom: 24px;
  border-bottom: 1px solid #ccc;
  .tab-link {
    width: 80px;
    margin-right: 12px;
    line-height: 32px;
    font-size: 18px;
    font-weight: bold;
    transition: all 0.2s;
    color: #999;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    display: block;
    position: relative;
    bottom: -1px;
    &.router-link-active {
      color: var(--el-color-primary);
      border-bottom: 2px solid var(--el-color-primary);
    }
  }
}
</style>
