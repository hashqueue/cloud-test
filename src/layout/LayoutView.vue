<template>
  <div class="app-wrapper" :class="[sidebarOpened ? 'openSidebar' : 'hideSidebar']">
    <!-- 左侧的 menu -->
    <SidebarView class="sidebar-container" :style="{ backgroundColor: '#304156' }" />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <NavBarView />
      </div>
      <!-- 内容区 -->
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import AppMain from './components/AppMain.vue'
import NavBarView from './components/NavbarView.vue'
import SidebarView from './components/Sidebar/SidebarView.vue'
import { useSystemSettingStore } from '@/stores/system'
import { computed } from 'vue'

const systemSettingStore = useSystemSettingStore()

const sidebarOpened = computed(() => systemSettingStore.sidebarStatus)
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
