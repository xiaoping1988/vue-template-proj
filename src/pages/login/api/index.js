import {get, post} from '../../../axios'

const LogApiPre = '/api'

export const LogUrl = {
  Login: LogApiPre + '/login', // 登录
  Logout: LogApiPre + '/logout' // 退出
}

/**
 * 登录
 * @param params
 */
export const login = (params) => { return post(LogUrl.Login, params) }

/**
 * 退出
 * @param params
 */
export const logout = (params) => { return get(LogUrl.Logout, params) }
