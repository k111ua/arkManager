<template>
  <el-form
    ref="loginFormRef"
    :model="loginForm"
    :rules="rules"
    labelPosition="top"
    status-icon
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="loginForm.username" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginForm.password" type="password" showPassword />
    </el-form-item>
    <el-form-item>
      <el-button
        :disabled="!formCompleted"
        type="primary"
        @click="handleLogin(loginFormRef)"
      >
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import link from '@/api/Link'
import apiUrl from '@/api/url'
import { useRouter } from 'vue-router'
import userEncrypt from '@/hook/index'

const router = useRouter()
const loginFormRef = ref<FormInstance>()
const loginForm = reactive({
  username: '',
  password: ''
})
const formCompleted = ref(false)

watch(loginForm, (iv, pv) => {
  if (iv.username !== '' && iv.password !== '') {
    formCompleted.value = true
  } else {
    formCompleted.value = false
  }
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

const handleLogin = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      link(
        apiUrl.url,
        'get',
        {},
        {
          username: loginForm.username,
          password: userEncrypt(loginForm.password).value
        }
      ).then((ok: any) => {
        if (ok.data.length !== 0) {
          ElMessage({
            message: '登录成功',
            type: 'success'
          })
          router.push('/home')
        } else {
          ElMessage({
            message: '用户名或密码错误',
            type: 'warning'
          })
        }
      })
    } else {
      ElMessage({
        message: '登录失败',
        type: 'warning'
      })
      return false
    }
  })
}
</script>

<style lang="scss" scoped></style>
