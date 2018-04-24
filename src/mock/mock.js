import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Login from '../pages/login/mock'

export default {
  /**
   * mock 入口
   */
  bootstrap () {
    let mock = new MockAdapter(axios)
    Login.bootstrap(mock)
  },
  /**
   * mock服务的返回结果集，并打印日志,
   * @param requestType 请求类型
   * @param apiName 接口名称
   * @param apiUrl 接口url
   * @param apiParam 接口参数
   * @param apiResult 接口返回结果的result属性或者是接口返回的完整json对象{code:,msg:,result:}
   * @returns {{code: number, msg: string, result: *}}
   */
  apiResponseJson (requestType, apiName, apiUrl, apiParam, apiResult) {
    let res = {
      code: 0,
      msg: 'success',
      result: apiResult
    }
    if (apiResult.code !== undefined && apiResult.msg !== undefined) {
      res = apiResult
    }
    console.log(apiName + ',url:' + apiUrl + ', 请求类型：' + requestType + ',参数：', apiParam)
    console.log(apiName + ', 返回：', res)
    return res
  },
  /**
   * 打印mock的接口格式，包括接口名称，接口url，接口参数，接口返回，方法会返回mock测试数据json格式
   * @param requestType
   * @param apiName
   * @param apiUrl
   * @param apiParam
   * @param apiResult
   * @returns {[number,*]}
   */
  resolve200 (requestType, apiName, apiUrl, apiParam, apiResult) {
    return [200, this.apiResponseJson(requestType, apiName, apiUrl, apiParam, apiResult)]
  },
  /**
   *
   * @param config
   * @param requestType
   * @param apiName
   * @param apiUrl
   * @param apiResultFunc
   * @returns {Promise}
   */
  replyFunc (config, requestType, apiName, apiUrl, apiResultFunc) {
    let data = config.data
    if (typeof (data) === 'string') {
      data = JSON.parse(data)
    }
    return new Promise((resolve, reject) => {
      resolve(this.resolve200(requestType, apiName, apiUrl, data, apiResultFunc(data)))
    })
  },
  /**
   * mock,post请求,模拟后端正常成功的逻辑,code=0
   * @param mock mock对象
   * @param apiName 接口名称
   * @param apiUrl 接口url
   * @param apiResultFunc 获取接口返回对象的result属性值的回调方法，回调方法的参数就是接口参数，是一个json对象
   */
  post (mock, apiName, apiUrl, apiResultFunc) {
    mock.onPost(apiUrl).reply(config => {
      return this.replyFunc(config, 'post', apiName, apiUrl, apiResultFunc)
    })
  },
  /**
   * mock,get,模拟后端正常成功的逻辑,code=0
   * @param mock mock对象
   * @param apiName 接口名称
   * @param apiUrl 接口url
   * @param apiResultFunc 获取接口返回对象的result属性值的回调方法，回调方法的参数就是接口参数，是一个json对象
   */
  get (mock, apiName, apiUrl, apiResultFunc) {
    mock.onGet(apiUrl).reply(config => {
      return this.replyFunc(config, 'get', apiName, apiUrl, apiResultFunc)
    })
  }
}
