import Vue from 'vue'
import Router from 'vue-router'
import VueGlobal from '../assets/js/vueGlobal'
import LoginUtil from '../assets/js/loginUtils'
import Page from '../pages'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
      name: '未匹配的路由',
      component: Page.Login
    },
    {
      path: '/',
      name: '登录',
      component: Page.Login
    },
    {
      path: '/noauth',
      name: '没有权限',
      component: Page.NoAuth
    },
    {
      path: '/sys',
      name: '系统管理',
      component: Page.Sys,
      children: [
        { path: 'user', name: '用户管理', component: Page.Sys.User },
        { path: 'role', name: '角色管理', component: Page.Sys.Role }
      ]
    },
    {
      path: '/report',
      name: '报表平台',
      component: Page.Report,
      children: []
    }
  ]
})

/**
 * 不做登录校验的路由集合
 * @type {[*]}
 */
const unLoginCheckRoutes = ['/noauth', '/test', '/report-design']

/**
 * 拦截路由跳转,校验用户的路由权限,或者做流量监控
 */
router.beforeEach(function (to, from, next) {
  // 是否要做登录及权限校验
  let loginCheck = true
  unLoginCheckRoutes.forEach(r => {
    if (to.path === '/' || (r !== '/' && to.path.startsWith(r))) {
      loginCheck = false
    }
  })
  if (loginCheck) {
    let user = LoginUtil.getLoginUser()
    if (user === null) {
      VueGlobal.goLoginPage(to.path)
      return
    }
    if (user.sysRouters.includes(to.path)) { // 判断路由是不是一个资源
      if (user.authRouters.includes(to.path)) { // 有此路由权限的登录用户才能访问
        next()
      } else {
        next('/noauth')
      }
    } else { // 登录用户都能访问的路由资源
      next()
    }
  } else { // 所有用户都能访问的路由资源
    next()
  }
})
export default router
