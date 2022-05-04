<template>
  <div class="app-wrapper">
    <!-- 左侧的 menu -->
    <!-- 左侧 menu -->
    <SideBar class="sidebar-container" :style="{ backgroundColor: '#304156' }" />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <NavBar />
      </div>
      <!-- 内容区 -->
      <AppMain />
    </div>
    <NavBar />
  </div>
</template>

<script setup>
import AppMain from './components/AppMain.vue'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
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
}
</style>
