<template>
  <div class="video-panel">
    <video autoplay loop class="video">
      <source src="@/assets/videos/video.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="login-panel">
    <img src="@/assets/images/logo.png" class="logo" />
    <div class="tab-bar">
      <router-link to="/entry/login" class="tab-link">登录</router-link>
      <router-link to="/entry/register" class="tab-link">注册</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.video-panel {
  position: absolute;
  top: 0;
  left: 400px;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
  .video {
    position: relative;
    width: auto;
    height: 100%;
  }
}
.login-panel {
  width: 560px;
  background-color: #fff;
  height: 100%;
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  padding: 200px 70px;
  .logo {
    width: 210px;
    height: 36px;
    display: block;
    margin-bottom: 56px;
  }
  // margin: 200px auto 0 auto;
}
.tab-bar {
  display: flex;
  margin-bottom: 24px;
  border-bottom: 1px solid #ccc;
  .tab-link {
    width: 56px;
    margin-right: 16px;
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
