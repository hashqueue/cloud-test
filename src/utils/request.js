import axios from 'axios'
import { ElMessage } from 'element-plus'

// const TOKEN_INVALID = 'Token认证失败, 请重新登录.'
const NETWORK_ERROR = '网络请求异常, 请稍后重试.'
const REQUEST_API_SUCCESS = '请求后端接口成功.'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  (requestConfig) => {
    // TODO
    // const headers = requestConfig.headers
    // if (!headers.Authorization) headers.Authorization = 'Bearer ey'
    return requestConfig
  },
  (error) => {
    console.log(error)
    ElMessage.error({ message: error.message || '请求后端接口时出现未知错误.', duration: 6000 })
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  (response) => {
    // console.log(response)
    const { code, data, message } = response.data
    // TODO 此处的业务状态码需要根据后端进行配置
    if (code === 20000 || code === 200) {
      ElMessage.success(message || REQUEST_API_SUCCESS)
      return data
    } else {
      // 业务错误
      ElMessage.error({ message: message || NETWORK_ERROR, duration: 6000 })
      return Promise.reject(message || NETWORK_ERROR)
    }
  },
  (error) => {
    // console.log(Object.keys(error))
    // console.log(error.config)
    // console.log(error.request)
    // console.log(error.response)
    // console.log(error.isAxiosError)
    // console.log(error.toJSON)
    console.log(error)
    ElMessage.error({ message: error.response.data.message || error.message, duration: 6000 })
    return Promise.reject(error)
  }
)

export default service
