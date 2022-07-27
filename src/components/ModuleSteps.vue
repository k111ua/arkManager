<template>
  <div class="module-steps">
    <el-steps :active="Number(active)" finish-status="success">
      <el-step
        :class="item"
        title="."
        v-for="item in ['l0', 'l1', 'l2', 'l3']"
      />
    </el-steps>
    <el-radio-group v-model="active" @change="handleChange">
      <el-radio :label="item" v-for="item in ['1', '2', '3', '4']"></el-radio>
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const active = ref(1)

const emit = defineEmits(['step'])

const handleChange = () => {
  emit('step', active)
}
</script>

<style lang="scss">
.module-steps {
  height: 72px;
  position: relative;
  .el-radio-group {
    flex: 1;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 999;
    .el-radio {
      width: 50px;
      height: 72px;
      //background: rgba(0, 0, 0, 0.08);
      font-size: 0;
      .el-radio__input {
        display: none;
      }
      .el-radio__label {
        display: none;
      }
    }
  }
  .el-steps {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex: 1;
    z-index: 10;
    height: 72px;
    .l0 {
      opacity: 0.5;
      .el-step__head {
        .el-step__icon {
          background: url(@/assets/images/module_l0.png) no-repeat left center;
        }
      }
    }
    .l1 {
      .el-step__head {
        .el-step__icon {
          //background: url(@/assets/images/module_l1.png) no-repeat left center;
        }
      }
    }
    .l1 {
      .el-step__head {
        .el-step__icon {
          background: url(@/assets/images/module_l1.png) no-repeat left center;
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
      width: 48px;
      height: 44px;
      font-size: 0;
      background: #fff;
    }
    .el-step__icon.is-text {
      border-radius: 0;
      border: none;
    }
    .el-step.is-horizontal .el-step__line {
      bottom: 5px;
      left: 12px;
      top: auto;
      right: 0;
      height: 2px;
      background-color: #3c3c3c;
      //opacity: 0.2;
      .el-step__line-inner {
        display: none;
      }
    }
  }
  .el-step__head {
    height: 100%;
  }
  .el-step__head.is-process {
    opacity: 0.2;
  }
  .el-step__head.is-success {
    opacity: 1;
  }
  .el-step__head.is-wait {
    opacity: 0.2;
  }
  .el-step__main {
    position: absolute;
    bottom: 0;
    .el-step__title {
      font-size: 0;
      display: none;
    }
    .el-step__description {
      width: 12px;
      height: 12px;
      padding-right: 0;
      background-color: #3c3c3c;
      &.is-wait {
        opacity: 0.2;
      }
      &.is-process {
        opacity: 0.2;
      }
    }
  }
}
</style>
