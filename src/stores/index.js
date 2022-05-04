import { createPinia } from 'pinia'
// pinia持久化存储插件
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist)

export default store
