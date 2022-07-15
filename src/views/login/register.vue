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
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="ruleForm.email" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" type="password" showPassword />
    </el-form-item>
    <el-form-item label="重复密码" prop="rePassword">
      <el-input v-model="ruleForm.rePassword" type="password" showPassword />
    </el-form-item>
    <el-form-item>
      <el-button type="primary">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import * as check from '@/utils/verification'
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  username: '',
  email: '',
  password: '',
  rePassword: ''
})

const validateUsername = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('用户名不能为空'))
  } else {
    callback()
  }
}
const validateEmail = (rule: any, value: any, callback: any) => {
  check.validateEmail(rule, value, callback)
}
const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('密码不能为空'))
  } else {
    callback()
  }
}
const validateRePassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('密码不能为空'))
  } else if (value !== ruleForm.password) {
    callback(new Error('两次输入密码不一致'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules>({
  username: [{ validator: validateUsername, trigger: 'blur' }],
  email: [{ validator: validateEmail, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
  rePassword: [{ validator: validateRePassword, trigger: 'blur' }]
})
</script>

<style lang="scss" scoped></style>
