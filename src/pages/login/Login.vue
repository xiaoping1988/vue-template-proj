<template>
  <div class="p-login p-middle">
    <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm" class="p-login-form">
      <el-form-item prop="userName">
        <el-input v-model="loginForm.userName" placeholder="请输入账号">
          <template slot="prepend"><div class="p-login-form-label">账号</div></template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" id="password" placeholder="请输入密码">
          <template slot="prepend"><div class="p-login-form-label">密码</div></template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" type="primary" @click="submitLogin" :loading="loginLoading">{{loginLoading ? '登录中' : '登录'}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {login} from './api'
  import LoginUtil from '../../assets/js/loginUtils'
  export default {
    data () {
      return {
        loginForm: {
          userName: 'admin',
          password: '123456'
        },
        loginFormRules: {
          userName: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },
        loginLoading: false
      }
    },
    methods: {
      submitLogin () {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {
            this.loginLoading = true
            login(this.loginForm).then(res => {
              this.loginLoading = false
              LoginUtil.setLoginUser(res.result)
              if (this.$route.query.toPage && this.$route.query.toPage !== '/') {
                this.$router.push(this.$route.query.toPage)
              } else {
                this.$router.push('/sys')
              }
            }).catch(error => {
              this.handleError(error)
              this.loginLoading = false
            })
          } else {
            return false
          }
        })
      }
    },
    mounted () {
//      let token = LoginUtil.getTokenCookie()
//      if (token && token.trim() !== '') {
//        this.$router.push('/sys')
//      }
    }
  }
</script>

<style scoped>
  .p-login {
    width: 100%;
    height: 100%;
  }

  .p-login-form-label {
    width: 40px;
  }
</style>
