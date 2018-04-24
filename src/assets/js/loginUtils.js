import {addCookie, deleteCookie, getCookie} from './assist'

const cookieTokenKey = 'vue_template_proj_token'
const sessionUserKey = 'userInfo'

export default {
  /**
   * 将登录用户放到sessionStorage中
   * @param user
   */
  setLoginUser (user) {
    user.authDom = {}
    user.authDomIds.forEach(id => {
      user.authDom[id] = true
    })
    localStorage.setItem(sessionUserKey, JSON.stringify(user))
    addCookie(cookieTokenKey, user.token, 24)
  },
  /**
   * 移除sessionStorage中的登录用户
   */
  removeLoginUser () {
    localStorage.removeItem(sessionUserKey)
    deleteCookie(cookieTokenKey)
  },
  /**
   * 获取登录用户信息
   */
  getLoginUser () {
    return JSON.parse(localStorage.getItem(sessionUserKey))
  },
  /**
   * 获取cookie中的token
   * @returns {*}
   */
  getTokenCookie () {
    return getCookie(cookieTokenKey)
  },
  /**
   * 删除cookie中的token
   */
  removeTokenCookie () {
    deleteCookie(cookieTokenKey)
  }
}
