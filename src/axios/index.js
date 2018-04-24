import axios from 'axios'
import qs from 'qs'
import LoginUtil from '../assets/js/loginUtils'
import VueGlobal from '../assets/js/vueGlobal'

/**
 * get请求
 * @param url
 * @param params
 */
export const get = (url, params) => { return axios.get(url + qs.stringify(params)).then(res => res.data) }

/**
 * post请求
 * @param url
 * @param params
 */
export const post = (url, params) => { return axios.post(url, params).then(res => res.data) }

/**
 * 下载请求
 * @param url
 * @param params
 */
export const download = (url, params) => { window.location.href = axios.defaults.baseURL + url + '?token=' + LoginUtil.getLoginUser().token + '&' + qs.stringify(params) }

// 1.设置请求头的默认配置
// 前后端联调的时候,后端服务地址
axios.defaults.baseURL = ''
if (process.env.NODE_ENV === 'development') {
  // axios.defaults.baseURL = 'http://10.253.7.232:8888'
}
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 拦截request请求
axios.interceptors.request.use(function (config) {
  // 添加登录token或者其他公共参数
  let user = LoginUtil.getLoginUser()
  if (user) {
    if (config.data) {
      config.data.token = user.token
    } else {
      config.data = {token: user.token}
    }
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 拦截请求response,在此可做统一的错误提示
axios.interceptors.response.use(function (response) {
  if (response.data && response.status === 200) {
    if (response.data.code === 0) {
      return response
    } else {
      if (response.data.code === 400 || response.data.code === 401) { // 登录token失效
        VueGlobal.goLoginPage()
        return response
      } else {
        VueGlobal.notifyWarn(response.data.msg)
        return Promise.reject(response.data)
      }
    }
  } else {
    VueGlobal.notifyWarn(response.statusText)
    return Promise.reject(new Error(response))
  }
}, function (error) {
  VueGlobal.notifyWarn(error.message)
  return Promise.reject(error)
})

export default axios
