<template>
  <el-form :model="form" label-width="120px" label-position="left">
    <el-form-item label="账号">
      <el-input v-model="form.owner" />
    </el-form-item>
    <el-form-item label="联系人">
      <el-input v-model="form.contract" />
    </el-form-item>
    <el-form-item label="账号类型">
      <el-select v-model="form.usage" placeholder="选择账号类型">
        <el-option label="满配" value="top" />
        <el-option label="四星队" value="1604" />
        <el-option label="114" value="114" />
      </el-select>
    </el-form-item>
    <el-form-item label="服务器">
      <el-select v-model="form.server" placeholder="选择服务器">
        <el-option label="官服" value="官服" />
        <el-option label="B服" value="B服" />
      </el-select>
    </el-form-item>
    <!-- <el-form-item label="图鉴">
      <el-input v-model="form.collection" />
    </el-form-item>
    <el-form-item label="潜能">
      <el-input v-model="form.potential" />
    </el-form-item>
    <el-form-item label="专精">
      <el-input v-model="form.master" />
    </el-form-item> -->
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import link from '@/api/Link'
import apiUrl from '@/api/url'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({
  owner: '',
  contract: '',
  usage: 'top',
  server: '官服',
  collection: '100%',
  potential: '100%',
  master: '100%'
})

const onSubmit = () => {
  link(
    apiUrl.accountData,
    'get',
    {},
    {
      owner: form.owner
    }
  ).then((ok: any) => {
    if (ok.data.length !== 0) {
      console.log(ok.data)
      ElMessage({
        message: '账号已存在',
        type: 'warning'
      })
    } else {
      addAccount()
      ElMessage({
        message: '账号添加成功',
        type: 'success'
      })
      router.push('/account/accountList')
    }
  })
  const addAccount = () => {
    link(
      apiUrl.accountData,
      'post',
      {
        owner: form.owner,
        contract: form.contract,
        usage: form.usage,
        server: form.server,
        collection: form.collection,
        potential: form.potential,
        master: form.master
      },
      {}
    ).then((ok: any) => {
      if (ok.data.length !== 0) {
      } else {
      }
    })
  }
}
</script>

<style lang="scss" scoped></style>
