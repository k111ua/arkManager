<template>
  <div class="login-panel">
    <el-tabs v-model="tab" @tab-click="tabClick">
      <el-tab-pane label="登录"></el-tab-pane>
      <el-tab-pane label="注册"></el-tab-pane>
    </el-tabs>
    <el-form
      ref="loginForm"
      :model="ruleLogin"
      status-icon
      :rules="rules"
      class="login-form"
      label-position="top"
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="text" :model="ruleLogin.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" :model="ruleLogin.password" show-password />
      </el-form-item>
      <el-form-item label="重复密码" prop="rePassword">
        <el-input type="password" :model="ruleLogin.rePassword" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import type { TabsPaneContext } from 'element-plus'

const tabClick = (tab: TabsPaneContext) => {
  console.log(tab.props.label)
}
const loginForm = ref<FormInstance>()
const tab = ref('登录')

const ruleLogin = reactive({
  username: '',
  password: '',
  rePassword: ''
})

console.log(ruleLogin.username)

const rules = reactive({
  username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' }
  ],
  rePassword: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' }
  ]
})
</script>

<style lang="scss">
.login-panel {
  width: 400px;
  margin: 200px auto 0 auto;
}
</style>
