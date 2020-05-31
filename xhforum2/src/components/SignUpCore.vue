<template>
   <!-- 使用card组件包裹 -->
  <el-card class="signup-content">
    <!-- 图标 -->
    <img src="./../assets/imgs/logo.png" alt="">
    <!-- 项目名称 -->
    <p class="slogen">FakeZhihu Project</p>

    <!-- 一.注册表单 -->
    <div class="register" v-show="nowStatus === 'register'">
      <!-- 调用elements的for组件 -->
      <el-form
        :model="registerForm"
        :rules="registerRules"
        ref="registerForm"
        label-width="0px"
      >
        <!-- 表单子组件1-输入用户名 -->
        <el-form-item prop='name' class="no-label">
          <el-input placeholder="请输入用户名" v-model="registerForm.name" />
        </el-form-item>

        <!-- 表单子组件2-输入邮箱 -->
        <el-form-item prop='email' class="no-label">
          <el-input placeholder="请输入邮箱" v-model="registerForm.email" />
        </el-form-item>

        <!-- 表单子组件3-第一次输入密码 -->
        <el-form-item prop='password' class="no-label">
          <el-input type="password" placeholder="请输入密码" v-model="registerForm.password" />
        </el-form-item>

        <!-- 表单子组件4-第二次输入密码 -->
        <el-form-item prop='passwordEnsure' class="no-label">
          <el-input type="password" placeholder="请再次输入密码" v-model="registerForm.passwordEnsure" />
        </el-form-item>

        <!-- 注册表单提交组件 -->
        <el-form-item prop='submit'>
          <!-- 提交按钮 -->
          <el-button
            class="submit-btn"
            type="primary"
            @click="submitForm('registerForm')"
          >
            注册
          </el-button>
        </el-form-item>
      </el-form>

      <!-- 注册部分小页脚 -->
      <div class="footer register-footer">
        <span>
          注册即代表同意
          <a href="#">《Fake协议》</a>
          <a href="#">《隐私保护指引》</a>
        </span>
        <a href="#">注册机构号</a>
      </div>
    </div>

    <!-- 二.登录表单 -->
    <div class="login" v-show="nowStatus === 'login'">
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="0px"
      >
         <!-- 登录账号 -->
        <el-form-item prop='username' class="no-label">
          <el-input placeholder="手机号或邮箱" v-model="loginForm.username" />
        </el-form-item>
        <!-- 登录密码 -->
        <el-form-item prop='password' class="no-label">
          <el-input placeholder="请输入密码" v-model="loginForm.password" type="password" />
        </el-form-item>

        <!-- 其他登录-->
        <div class="others">
          <span>
            手机验证码登录
          </span>
          <span>
            忘记密码？
          </span>
        </div>

        <!-- 登录表单提交组件 -->
        <el-form-item prop='submit'>
          <el-button
            class="submit-btn"
            type="primary"
            @click="submitForm('loginForm')"
          >登录</el-button>
        </el-form-item>
      </el-form>

       <!-- 其他登录部分小页脚 -->
      <div class="footer login-footer">
        <span>
          <a href="#">二维码登录</a>
          ·
          <a href="#">海外手机登录</a>
          ·
          <a href="#">社交账号登录</a>
        </span>
      </div>
    </div>

    <!-- 切换登录部分，用一个三元元算符简单判断即可 -->
    <div class="switcher">
      {{tips[nowStatus].base}}
      <span
        @click="nowStatus = nowStatus === 'register' ? 'login' : 'register'"
      >
        {{tips[nowStatus].link}}
      </span>
    </div>
  </el-card>
</template>
<script>

export default {
  data () {
    // 表单验证采用的是element提供的方法，通过定义指定格式验证规则，之后绑定在表单上，填写表单时会自动验证
    // validatePass用来校验首次输入的密码参数（规则，值，回调函数）
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (!this.pwdReg.test(value)) {
        callback(new Error('用户密码需由数字/大写字母/小写字母/标点符号组成，8位以上'))
      } else {
        if (this.registerForm.passwordEnsure !== '') {
          this.$refs.registerForm.validateField('passwordEnsure')
        }
        callback()
      }
    }
    //  validatePassEnsur用来校验二次输入的密码
    const validatePassEnsure = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      // 正则校验
      pwdReg: /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?=.*[A-Z])(?=.*[a-z])(?!.*\n).*$/,
      // 当前展示表单
      nowStatus: 'login',
      // 切换按钮提示
      tips: {
        register: {
          base: '已有账号？',
          link: '登录'
        },
        login: {
          base: '没有账号？',
          link: '注册'
        }
      },
      // 注册表单数据
      registerForm: {
        email: '',
        password: '',
        passwordEnsure: ''
      },
      registerRules: {
        email: [
          // 是否必填及触发方法
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          // 根据数据类型验证及触发的方法
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        password: [
          // 是否必填及触发方法
          { required: true, message: '请输入密码', trigger: 'blur' },
          // 自定义的验证方法
          { validator: validatePass, trigger: 'blur' }
        ],
        passwordEnsure: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePassEnsure, trigger: 'blur' }
        ]
      },

      // 登录表单数据
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名或邮箱', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 提交按钮触发事件
    submitForm (formName) {
      // 判断是否通过验证
      this.$refs[formName].validate((valid) => {
        // 通过验证后判断当前表单类型
        if (valid) {
          if (this.nowStatus === 'register') {
            this.register()
          } else {
            this.login()
          }
        } else {
          this.$Message.error('error submit!!!')
          return false
        }
        return ''
      })
    }
  }
}

</script>
