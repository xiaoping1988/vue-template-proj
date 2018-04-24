import Mock from '../../../mock'
import {LogUrl} from '../api'

export const AdminUser = {
  userId: 1,
  userName: 'admin',
  password: '123456',
  name: '某某某',
  sysRouters: ['/sys', '/sys/user', '/sys/role', '/report'], // 所有是资源的路由
  authRouters: ['/sys', '/sys/user'], // 用户有权限的路由资源
  authDomIds: ['sys', 'sys_user', 'report'] // 用户有权限的菜单或者按钮的id集合
}

export default {
  bootstrap (mock) {
    Mock.post(mock, '登录系统', LogUrl.Login, function (params) {
      if (params.userName !== AdminUser.userName || params.password !== AdminUser.password) {
        return {code: 100, msg: '账号或者密码不正确!'}
      }
      return AdminUser
    })

    Mock.get(mock, '退出系统', LogUrl.Logout, function (params) {
      return true
    })
  }
}
