<template>
  <div class="navbar">
    <HamburgerView class="hamburger-container" />
    <BreadcrumbView class="breadcrumb-container" />
  </div>
</template>

<script setup>
import HamburgerView from '@/components/HamburgerView.vue'
import BreadcrumbView from '@/components/Breadcrumb/BreadcrumbView.vue'
</script>

<style lang="scss" scoped>
.navbar {
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .breadcrumb-container {
    float: left;
  }
}
</style>
