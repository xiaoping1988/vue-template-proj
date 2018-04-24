<template>
  <div class="p-head">
    <div class="p-head-logo">
      系统LOGO
    </div>
    <div class="p-head-nav">
      <ul>
        <li @click="$router.push('/sys')" v-if="getLoginUser().authDom && getLoginUser().authDom.sys">
          <span>系统管理</span>
        </li>
        <li @click="$router.push('/report')" v-if="getLoginUser().authDom && getLoginUser().authDom.report">
          <span>报表平台</span>
        </li>
      </ul>
    </div>
    <div class="p-head-right">
      <span>
        <i class="fa fa-user fa-1x"></i>
      </span>
      <span>{{getLoginUser().name}}</span>
      <span>|</span>
      <span>
        <i class="fa fa-sign-out fa-1x" v-on:click="logout" title="退出登录"></i>
      </span>
    </div>
  </div>
</template>

<script>
  import {logout} from '../pages/login/api'
  import LoginUtil from '../assets/js/loginUtils'
  export default {
    name: 'PHead',
    methods: {
      logout () {
        logout().catch(this.handleError)
        this.$router.push('/')
        LoginUtil.removeLoginUser()
      }
    }
  }
</script>

<style>
  .p-head {
    width: 100%;
    height: 60px;
    display: flex;
    line-height: 60px;
  }

  .p-head-logo {
    width: 180px;
    text-align: center;
  }

  .p-head-nav {
    width: calc(100% - 300px);
  }

  .p-head-nav > ul {
    display: flex;
    margin: 0px;
  }

  .p-head-nav > ul > li {
    list-style-type: none;
    text-align: center;
    padding: 0px 10px;
    cursor: pointer;
  }

  .p-head-right {
    width: 120px;
  }
</style>
