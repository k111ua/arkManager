<template>
  <div class="module-state-item">
    <el-avatar :size="72" :src="props.avatarPath" />
    <div class="owner-name">{{ props.owner }}</div>
    <el-steps :active="props.state - 1" finish-status="success">
      <el-step /><el-step /><el-step />
    </el-steps>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue'
const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})
//setup语法糖使用props方法
const props = defineProps(['owner', 'state', 'avatarPath'])
const { circleUrl } = toRefs(state)

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
</script>

<style lang="scss" scoped>
.module-state-item {
  display: flex;
  border-radius: 4px;
  border: 1px solid var(--el-color-info-light-7);
  cursor: pointer;
  padding: 16px;
  margin-bottom: 16px;
  .el-steps {
    flex: 1;
    margin-left: 12px;
  }
}
</style>
