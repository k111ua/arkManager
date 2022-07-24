<template>
  <el-form :model="form" label-width="120px" label-position="left">
    <el-form-item label="账号">
      <el-input v-model="form.owner" />
    </el-form-item>
    <el-form-item label="账号类型">
      <el-select v-model="form.usage" placeholder="选择账号类型">
        <el-option label="满配" value="graduate" />
        <el-option label="四星队" value="1604" />
        <el-option label="114" value="114" />
      </el-select>
    </el-form-item>
    <el-form-item label="服务器">
      <el-select v-model="form.server" placeholder="选择服务器">
        <el-option label="官服" value="hypergraph" />
        <el-option label="B服" value="bilibili" />
      </el-select>
    </el-form-item>
    <el-form-item label="图鉴">
      <el-input v-model="form.collection" />
    </el-form-item>
    <el-form-item label="潜能">
      <el-input v-model="form.potential" />
    </el-form-item>
    <el-form-item label="专精">
      <el-input v-model="form.master" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const form = reactive({
  owner: '',
  usage: 'graduate',
  server: 'hypergraph',
  collection: 'complete',
  potential: 'complete',
  master: 'complete'
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang="scss" scoped></style>
