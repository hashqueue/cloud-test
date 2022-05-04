import { defineStore } from 'pinia'

export const userInfoStore = defineStore({
  id: 'userInfo',
  state: () => ({
    userInfo: null
  }),
  getters: {
    doubleCount: (state) => state.userInfo
  },
  actions: {
    setUserInfo(userInfo) {
      this.userInfo = userInfo
    }
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'userInfo',
        storage: localStorage
      }
    ]
  }
})
