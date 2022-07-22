<template>
  <div class="header">
    <div class="logo"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header {
  height: 55px;
  padding-top: 10px;
  .logo {
    background: url(@/assets/logo.png) no-repeat left center;
    width: 240px;
    height: 36px;
    background-size: 208px 36px;
  }
}
</style>
