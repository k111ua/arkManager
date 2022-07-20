<template>
  <el-dialog v-model="$store.state.HomeModule.dialogState" title="修改">
    <el-form :model="form">
      <el-form-item label="楼盘" :label-width="formLabelWidth">
        <el-input v-model="form.title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="用途" :label-width="formLabelWidth">
        <el-select v-model="form.type" placeholder="Select">
          <el-option key="business" label="商用" value="商用" />
          <el-option key="house" label="住宅" value="住宅" />
          <el-option key="both" label="商住两用" value="商住两用" />
        </el-select>
      </el-form-item>
      <el-form-item label="门牌号" :label-width="formLabelWidth">
        <el-input v-model="form.num" autocomplete="off" />
      </el-form-item>
      <el-form-item label="户型" :label-width="formLabelWidth">
        <el-input v-model="form.houseType" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
const formLabelWidth = '140px'
import { useStore } from 'vuex'
import link from '@/api/Link'
import apiUrl from '@/api/url'
const store = useStore()

const form = reactive({
  title: '',
  type: '',
  num: '',
  houseType: ''
})
const handleCancel = () => {
  //console.log(store.state.HomeModule.updateData)
  store.commit('bbbb')
}
const handleSubmit = () => {
  const id = store.state.HomeModule.updateData.id
  const data = {
    title: form.title,
    type: form.type,
    houseType: form.houseType,
    num: form.num
  }
  link(apiUrl.userData + '/' + id, 'patch', data, {}).then((ok: any) => {
    //console.log(ok)
  })
  store.commit('bbbb')
  window.location.reload()
}
</script>
<style scoped>
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
