<template>
  <div>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="/sys">系统管理</el-checkbox>
      <el-checkbox label="/sys/user">用户管理</el-checkbox>
      <el-checkbox label="/sys/role">角色管理</el-checkbox>
      <el-checkbox label="/report">报表平台</el-checkbox>
    </el-checkbox-group>
    <el-button type="primary" @click="setUserAuth">保存</el-button>
  </div>
</template>

<script>
  import {AdminUser} from '../../login/mock'
  export default {
    data () {
      return {
        checkList: []
      }
    },
    methods: {
      setUserAuth () {
        AdminUser.authRouters = this.checkList
        let temp = []
        this.checkList.forEach(c => {
          temp.push(c.replace('/', '').replace('/', '_'))
        })
        AdminUser.authDomIds = temp
      }
    },
    mounted () {
      this.checkList = this.getLoginUser().authRouters
    }
  }
</script>

<style>

</style>
