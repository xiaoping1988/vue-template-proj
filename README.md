# vue-template-proj

> 一个vue模板工程,主要考虑如下几个问提

1. 需要引入哪些js
2. 目录结构如何规划
3. 前后端分离之后,数据结构如何定义
4. 如何做mock开发
5. 权限如何控制
6. 如何做统一的错误提示
7. 如何做ajax请求
8. 全局组件和全局方法有哪些

### clone下来之后初始化

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### 目录规划

- assets  `资源目录`
	- css `自定义css的文件目录`
	- img `图片目录`
	- js `自定义js的文件目录`
- axios	`ajax编程框架主配置目录`
	- index.js	`axios配置文件及出口`
- mock `mock开发主配置目录`
	- index.js `mock配置文件及出口`
- router `路由目录`
	- index.js `router配置文件及出口`
- components	`全局组件目录`
	- index.js `组件配置文件及出口`
- pages `所有业务模块目录`
	- common `业务模块目录`
		- api	`封装业务模块对应的后端api ajax请求的目录`
			- index.js `api出口文件`
		- mock `封装业务模块对应的后端api的mock请求的`
			- index.js `mock出口文件`
		- index.js `业务模块出口文件`
		- Common.vue `业务模块的vue文件`
- App.vue `顶级父组件`
- main.js `主配置文件`
