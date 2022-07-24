<template>
  <el-row :gutter="16" class="module-selector">
    <el-col :span="12" v-for="item in moduleList">
      <div :class="item.class" @Click="handleClick(item.index)">
        <div class="img-container">
          <img class="thumbnail" :src="item.thumbnail" />
        </div>
        <div class="title">
          <div class="name">{{ item.name }}</div>
          <div class="tag">{{ item.type }}</div>
        </div>
        <div class="detail">
          <div class="label">特性更新</div>
          <div class="value">{{ item.detail }}</div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script setup>
import { useStore } from 'vuex'
const store = useStore()
import { ref, reactive } from 'vue'
const radio1 = ref('New York')
const basePath = 'https://prts.wiki/images/'
const moduleList = reactive([
  {
    index: 0,
    class: 'module-item',
    name: '电磁调节器',
    type: 'CHA-X',
    detail:
      '攻击造成法术伤害，且会在4个敌人间跳跃，每次跳跃伤害降低10%并造成一定时间（0.8s）停顿',
    thumbnail: `${basePath}0/02/模组_电磁调节器.png`
  },
  {
    index: 1,
    class: 'module-item',
    name: '王权金币',
    type: 'CHA-Y',
    detail:
      '攻击造成法术伤害，且会在4个敌人间跳跃，每次跳跃伤害不再降低并造成短暂的停顿',
    thumbnail: `${basePath}5/50/模组_王权金币.png`
  }
])
const handleClick = (index) => {
  store.commit('moduleTabChange', index)
  moduleList.forEach((item) => {
    item.class = 'module-item'
  })
  moduleList[index].class = 'module-item active'
}
</script>
<style lang="scss" scoped>
.module-selector {
  display: flex;
  justify-content: space-between;
}
.module-item {
  box-sizing: border-box;
  width: 100%;
  //width: 592px;
  //height: 80px;
  --base-padding: 16px;
  border: 1px solid var(--el-color-info-light-5);
  background: url(@/assets/images/dot_bg.png) no-repeat top right;
  background-size: auto;
  position: relative;
  padding: var(--base-padding) calc(var(--base-padding) + 30px)
    var(--base-padding) calc(var(--base-padding) + 100px);
  cursor: pointer;
  height: 120px;
  border-radius: 6px;
  margin-bottom: calc(var(--base-padding) + 0px);
  margin-right: calc(var(--base-padding) + 0px);
  transition: box-shadow 0.3s;
  &:hover,
  &.active {
    border: 1px solid var(--el-color-primary);
    box-shadow: 0 4px 24px var(--el-color-primary-light-8);
    //background-color: var(--el-color-primary);
    .img-container {
      //background: url(@/assets/images/item_border.png) no-repeat 4px 4px;
      //background-size: auto;
    }
  }
  .title {
    display: flex;
    align-items: center;
    .name {
      font-size: 16px;
      line-height: 24px;
      color: var(--el-text-color-primary);
      font-weight: bold;
    }
    .tag {
      font-size: 12px;
      line-height: 18px;
      height: 18px;
      border: 1px solid #aaa;
      margin-left: 8px;
      color: var(--el-text-color-regular);
      border-radius: 4px;
      padding: 0 4px;
    }
  }
  .detail {
    .label {
      font-size: 12px;
      line-height: 24px;
      color: #888;
    }
    .value {
      font-size: 14px;
      line-height: 18px;
      color: var(--el-text-color-primary);
      //width: 220px;
    }
  }
  .img-container {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(var(--base-padding) + 108px);
    height: 118px;
  }
  .thumbnail {
    display: block;
    width: auto;
    height: 72px;
    margin: 23px auto;
  }
}
</style>
