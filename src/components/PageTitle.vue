<template>
  <div class="page-title">
    <div class="inner"><slot></slot></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.page-title {
  border-bottom: 1px solid #aaa;
  padding-top: 3px;
  font-weight: bold;
  height: 55px;
  font-size: 20px;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 16px;
  color: #222;
  .inner {
    display: inline-block;
    line-height: 48px;
    border-bottom: 4px solid #222;
  }
}
</style>
