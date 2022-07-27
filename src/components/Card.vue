<template>
  <div class="card">
    <el-icon :size="40" color="#333">
      <component :is="props.icon"></component>
    </el-icon>
    <div class="label">{{ props.label }}</div>
    <div class="line"></div>
    <div class="info">{{ props.info }}</div>
    <!-- <el-icon class="go" :size="24" color="#666"><Back /></el-icon> -->
  </div>
</template>

<script setup>
import { Box, Bicycle, ChatLineSquare, Back } from '@element-plus/icons-vue'
const props = defineProps({
  icon: {
    type: String,
    default: '<Box/>'
  },
  label: {
    type: String,
    default: '当前课题'
  },
  info: {
    type: String,
    default: '三人自忍TC-3'
  }
})
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
  padding: 20px;
  background: url(@/assets/images/dot_bg.png) no-repeat 120% 50%;
  position: relative;
  .go {
    transform: rotate(180deg);
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  .label {
    font-size: 14px;
    line-height: 32px;
    color: #999;
    //font-weight: bold;
  }
  .line {
    width: 30px;
    height: 4px;
    background-color: var(--el-color-primary);
    margin-bottom: 8px;
  }
  .info {
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    color: #333;
  }
}
</style>
