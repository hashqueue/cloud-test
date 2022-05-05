import { defineStore } from 'pinia'

export const useSystemSettingStore = defineStore({
  id: 'systemSettings',
  state: () => ({
    sidebarOpened: true
  }),
  getters: {
    sidebarStatus: (state) => state.sidebarOpened
  },
  actions: {
    triggerSidebarOpened() {
      this.sidebarOpened = !this.sidebarOpened
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'systemSettings',
        storage: localStorage
      }
    ]
  }
})
