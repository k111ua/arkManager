import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:8888'
})

service.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    console.log(error.response.status)
    switch (error.response.status) {
      case 404:
        ElMessage({
          message: '404 not found',
          type: 'warning'
        })
        break
      case 500:
        ElMessage({
          message: '服务器链接失败',
          type: 'warning'
        })
        break
      default:
        ElMessage({
          message: '未知错误',
          type: 'warning'
        })
        break
    }
    return Promise.reject(error)
  }
)

export default service
