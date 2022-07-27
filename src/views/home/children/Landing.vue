<template>
  <el-row :gutter="16">
    <el-col :span="8" v-for="item in cards">
      <Card :icon="item.icon" :label="item.label" :info="item.info"></Card>
    </el-col>
  </el-row>
</template>

<script setup>
const cards = [
  {
    icon: 'Box',
    label: '当前课题',
    info: '三人自忍TC-3'
  },
  {
    icon: 'Bicycle',
    label: '使用账号',
    info: '花木'
  },
  {
    icon: 'ChatLineSquare',
    label: '使用时长',
    info: '12h30min'
  }
]
</script>

<style></style>
