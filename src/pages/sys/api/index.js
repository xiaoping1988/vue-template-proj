import {post} from '../../../axios'

const LogApiPre = '/api'

export const LogUrl = {
  Login: LogApiPre + '/login', // 登录
  Logout: LogApiPre + '/logout' // 退出
}
