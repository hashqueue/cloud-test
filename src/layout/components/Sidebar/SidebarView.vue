<template>
  <div>
    <div class="logo-container">
      <el-avatar size="default" shape="circle" src="../src/assets/logo.svg" />
      <h1 class="logo-title" v-if="sidebarOpened">cloud-testing</h1>
    </div>
    <el-scrollbar>
      <SideBarMenu></SideBarMenu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import SideBarMenu from './SidebarMenu.vue'
import { useSystemSettingStore } from '@/stores/system'

const systemSettingStore = useSystemSettingStore()

// pinia中state中的变量的getters
const sidebarOpened = computed(() => systemSettingStore.sidebarStatus)
</script>

<style lang="scss" scoped>
.logo-container {
  height: 44px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
