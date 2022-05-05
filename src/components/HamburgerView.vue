<template>
  <div class="hamburger-container" @click="toggleClick">
    <el-icon class="hamburger">
      <component :is="icon" />
    </el-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSystemSettingStore } from '@/stores/system'

const systemSettingStore = useSystemSettingStore()
const toggleClick = () => {
  // 修改state
  systemSettingStore.triggerSidebarOpened()
}
// getters
const icon = computed(() => (systemSettingStore.sidebarStatus ? 'expand' : 'fold'))
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;

  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
