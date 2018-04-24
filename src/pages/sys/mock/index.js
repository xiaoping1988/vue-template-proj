import Mock from '../../../mock'
import {LogUrl} from '../api'

const AdminUser = {
  userId: 1,
  userName: 'admin',
  password: '123456',
  name: '某某某',
  sysRouters: [], // 所有是资源的路由
  authRouters: [] // 用户有权限的路由资源
}

export default {
  bootstrap (mock) {
    Mock.post(mock, '登录系统', LogUrl.Login, function (params) {
      console.log('ddd')
      debugger
      if (params.userName !== AdminUser.userName || params.password !== AdminUser.password) {
        debugger
        return {code: 100, msg: '账号或者密码不正确!'}
      }
      return AdminUser
    })

    Mock.post(mock, '退出系统', LogUrl.Logout, function (params) {
      return true
    })
  }
}
