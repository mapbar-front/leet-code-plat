<template>
  <div class="ql-login">
    <div class="ql-login__title">
      Template
    </div>
    <div class="ql-login__form">
      <el-form :model="userForm" ref="form" :rules="rules">
        <el-form-item prop="userName">
          <el-input prefix-icon="wyicon icon-user-o" v-model="userForm.userName" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="wyicon icon-lock" type="password" v-model="userForm.password" placeholder="密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="large" native-type="submit" :loading="submited" @click.prevent="login" style="width: 100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="ql-login__footer">
      mapbar-front 个人作品
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import { validCodeUrl } from '@/api/auth'
import { PASSPORD_HASH } from '@/constants/password'
export default {
  data () {
    return {
      submited: false,
      codeUrl: validCodeUrl(Date.now()),
      sended: false,
      countTimer: null,
      userForm: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名' }
        ],
        password: [
          { required: true, message: '请输入密码' }
        ]
      }
    }
  },

  mounted () {

  },

  methods: {
    login () {
      this.$refs.form.validate(valid => {
        if (valid) {
          let { userName, password, kaptcha } = this.userForm

          this.submited = true
          password = md5(`${password}${PASSPORD_HASH}`)
          this.$store.dispatch('login', { userName, password, kaptcha }).then((data) => {
            this.submited = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.submited = false
          })
        }
      })
    }
  }
}
</script>
<style lang="less">
.ql-login {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background: #f0f2f5 url("../assets/img/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-size: cover;

  .ql-login__form {
    width: 368px;

    .el-card__body {
      .el-form {
        margin: 20px 30px 0;

        .el-input {
          height: 45px;

          .el-input__prefix {
            .el-input__icon {
              position: relative;
              top: -5px;
              font-size: 20px;
            }
          }
        }
      }
    }
  }

  .ql-login__title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 60px;
    font-weight: 700;
    font-size: 56px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
  }

  .ql-login__img {
    position: relative;
    top: -1px;
    height: 36px;
    margin-left: 2px;
    vertical-align: middle;
    border-radius: 3px;
  }

  .ql-login__footer {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    color: #808695;

    img {
      margin-bottom: 6px;
    }
  }
}
</style>
