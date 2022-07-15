<template>
  <el-form
    ref="registerFormRef"
    :model="registerForm"
    :rules="rules"
    labelPosition="top"
    status-icon
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="registerForm.username" />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="registerForm.email" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="registerForm.password" type="password" showPassword />
    </el-form-item>
    <el-form-item label="重复密码" prop="rePassword">
      <el-input
        v-model="registerForm.rePassword"
        type="password"
        showPassword
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleRegister(registerFormRef)">
        注册
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import * as validator from '@/utils/verification'
import link from '@/api/Link'
import apiUrl from '@/api/url'

const registerFormRef = ref<FormInstance>()
const registerForm = reactive({
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
  validator.validateEmail(rule, value, callback)
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
  } else if (value !== registerForm.password) {
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

const handleRegister = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      let data = {
        username: registerForm.username,
        email: registerForm.email,
        password: registerForm.password
      }
      link(apiUrl.url).then((ok: any) => {
        console.log(ok)
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style lang="scss" scoped></style>
