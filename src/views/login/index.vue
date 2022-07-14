<template>
  <div class="login-panel">
    <el-tabs v-model="tab" @tab-click="tabClick">
      <el-tab-pane label="登录" name="login"></el-tab-pane>
      <el-tab-pane label="注册" name="register"></el-tab-pane>
    </el-tabs>
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
      <el-form-item label="邮箱" prop="email" v-show="tab === 'register'">
        <el-input v-model="ruleForm.email" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" showPassword />
      </el-form-item>
      <el-form-item
        label="重复密码"
        prop="rePassword"
        v-show="tab === 'register'"
      >
        <el-input v-model="ruleForm.rePassword" type="password" showPassword />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">
          {{ tab === 'register' ? '注册' : '登录' }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules, TabsPaneContext } from 'element-plus'
const tabClick = (tab: TabsPaneContext) => {}
const tab = ref('login')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  username: '',
  email: '',
  password: '',
  rePassword: ''
})

const rules = reactive<FormRules>({
  username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' }
  ],
  email: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input activity form', trigger: 'blur' }
  ],
  rePassword: [
    { required: true, message: 'Please input activity form', trigger: 'blur' }
  ]
})
</script>

<style lang="scss" scoped>
.login-panel {
  width: 400px;
  margin: 200px auto 0 auto;
}
</style>
