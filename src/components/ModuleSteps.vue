<template>
  <div class="module-state-item">
    <el-avatar :size="72" :src="props.avatarPath" />
    <!-- <div class="owner-name">{{ props.owner }}</div> -->
    <!-- <el-steps :active="props.state - 1" finish-status="success">
      <el-step class="l1" title="" />
      <el-step class="l2" title="" />
      <el-step class="l3" title="" />
    </el-steps> -->
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

<style lang="scss">
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
    .l1 {
      .el-step__head {
        .el-step__icon {
          background: url(@/assets/images/module_l1.png) no-repeat center;
        }
      }
    }
    .l2 {
      .el-step__head {
        .el-step__icon {
          background: url(@/assets/images/module_l2.png) no-repeat center;
        }
      }
    }
    .l3 {
      .el-step__head {
        .el-step__icon {
          background: url(@/assets/images/module_l3.png) no-repeat center;
        }
      }
    }
    .el-step__icon {
      width: 49px;
      height: 45px;
      font-size: 0;
      background: #fff;
    }
    .el-step__icon.is-text {
      border-radius: 0;
      border: none;
    }
    .el-step.is-horizontal .el-step__line {
      height: 2px;
      top: 60px;
      left: 0;
      right: 0;
      width: 12px;
      height: 12px;
      background-color: #3c3c3c;
      .el-step__line-inner {
        border-width: 1px;
        border-color: inherit;
        width: auto;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
      }
    }
    .el-step:last-of-type .el-step__line {
      display: block;
    }
    .el_step__main {
      .el-step__title {
        font-size: 16px;
        line-height: 38px;
      }
      .el-step__description {
        padding-right: 10%;
        margin-top: -5px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
      }
    }
  }
}
</style>
