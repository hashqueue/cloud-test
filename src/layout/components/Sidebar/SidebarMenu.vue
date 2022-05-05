<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :uniqueOpened="true"
    :default-active="activeMenu"
    :collapse="!sidebarOpened"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#f4f4f5"
    router
  >
    <SideBarItem v-for="item in routes" :key="item.path" :route="item"></SideBarItem>
  </el-menu>
</template>
<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SideBarItem from './SidebarItem.vue'
import { useSystemSettingStore } from '@/stores/system'

const systemSettingStore = useSystemSettingStore()

// pinia中state中的变量的getters
const sidebarOpened = computed(() => systemSettingStore.sidebarStatus)

// 过滤路由
const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})

// 计算高亮 menu 的方法
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
// console.log(JSON.stringify(routes.value))
</script>
