<template>
  <el-menu
    default-active="/modules"
    class="main-menu"
    :collapse="$store.state.HomeModule.mainMenuState"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <template v-for="item in router.options.routes[2].children" key="item.path">
      <el-sub-menu :index="item.path" v-if="item.children">
        <template #title>
          <el-icon><component :is="item.meta.icon"></component></el-icon>
          <span>{{ item.meta.label }}</span>
        </template>
        <el-menu-item :index="child.path" v-for="child in item.children">
          {{ child.meta.label }}
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item :index="item.path" v-else>
        <el-icon><component :is="item.meta.icon"></component></el-icon>
        <span>{{ item.meta.label }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const handleOpen = (key: string, keyPath: string[]) => {}
const handleClose = (key: string, keyPath: string[]) => {}

onMounted(() => {})
</script>

<style lang="scss">
.main-menu {
  height: 100%;
}
.el-menu-item {
  border-right: 3px solid #fff;
  //font-weight: 500;
  &:hover {
    border-right: 3px solid var(--el-menu-hover-bg-color);
  }
}
.el-menu-item.is-active {
  border-right: 3px solid var(--el-menu-active-color);
}
</style>
