<template>
  <el-icon>
    <component :is="icon" />
  </el-icon>
  <span>{{ title }}</span>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
