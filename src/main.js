import { createApp } from 'vue'
import store from '@/stores'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
// 导入element-plus样式
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
// 导入全局样式
import './styles/index.scss'

const app = createApp(App)
// 注册element plus的所有图标
for (const [name, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(name, component)
}

app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
