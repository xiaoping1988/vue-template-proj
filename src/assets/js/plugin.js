import Component from '../../components'
import VueGlobal from './vueGlobal'
import LoginUtil from './loginUtils'

const PComponents = {
  PHead: Component.PHead,
  PLayout: Component.PLayout,
  PMenu: Component.PNavside.PMenu,
  PMenuItem: Component.PNavside.PMenuItem
}

export default {
  install (Vue) {
    Vue.prototype.goBack = () => { VueGlobal.goBack() }
    Vue.prototype.getLoginUser = () => { return LoginUtil.getLoginUser() }

    // 消息提示
    Vue.prototype.message = (msg) => { VueGlobal.messageInfo(msg) }
    Vue.prototype.messageSuccess = (msg) => { VueGlobal.messageSuccess(msg) }
    Vue.prototype.messageWarn = (msg) => { VueGlobal.messageWarn(msg) }
    Vue.prototype.messageError = (msg) => { VueGlobal.messageError(msg) }

    // 通知提示
    Vue.prototype.notify = (msg) => { VueGlobal.notifyInfo(msg) }
    Vue.prototype.notifySuccess = (msg) => { VueGlobal.notifySuccess(msg) }
    Vue.prototype.notifyWarn = (msg) => { VueGlobal.notifyWarn(msg) }
    Vue.prototype.notifyError = (msg) => { VueGlobal.notifyError(msg) }

    // 弹框提示
    Vue.prototype.alertInfo = (msg) => { VueGlobal.alertInfo(msg) }
    Vue.prototype.alertSuccess = (msg) => { VueGlobal.alertSuccess(msg) }
    Vue.prototype.alertWarn = (msg) => { VueGlobal.alertWarn(msg) }
    Vue.prototype.alertError = (msg) => { VueGlobal.alertError(msg) }

    /**
     * 统一处理promise catch的错误
     * @param error 错误信息
     */
    Vue.prototype.handleError = (error) => { console.warn(error) }

    Object.keys(PComponents).forEach((key) => {
      Vue.component(key, PComponents[key])
    })
  }
}
