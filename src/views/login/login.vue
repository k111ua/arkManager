<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    labelPosition="top"
    status-icon
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" type="password" showPassword />
    </el-form-item>
    <el-form-item>
      <el-button type="primary">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  username: '',
  password: ''
})

const validateUsername = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('用户名不能为空'))
  } else {
    callback()
  }
}
const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('密码不能为空'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules>({
  username: [{ validator: validateUsername, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }]
})
</script>

<style lang="scss" scoped></style>
