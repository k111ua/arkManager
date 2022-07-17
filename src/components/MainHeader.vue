<template>
  <div class="menu-control">
    <el-icon @click="exc">
      <CaretRight v-if="$store.state.HomeModule.mainMenuState" />
      <CaretLeft v-else />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import { CaretLeft, CaretRight } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
const store = useStore()
const exc = () => {
  store.commit('aaaa')
}
</script>

<style lang="scss"></style>
