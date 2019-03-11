<template>
    <div class="login-warp">
        <div class="login">
            <el-form
            :model="ruleForm2"
            status-icon
            :rules="rules2"
            ref="ruleForm2"
            label-width="100px"
            class="demo-ruleForm"
            >
            <h1 class="login-title">系统登陆</h1>
            <el-form-item label="账号" prop="account">
                <el-input type="text" v-model="ruleForm2.account" autocomplete="off" placeholder="账号">></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="密码">></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button @click="resetForm('ruleForm2')">记住密码</el-button>
            </el-form-item>
            </el-form>
        </div>
   </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      logining: false,
      ruleForm2: {
        account: 'admin',
        checkPass: '123456'
      },
      rules2: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
          // { validator: validaePass }
        ],
        checkPass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          // { validator: validaePass2 }
        ]
      },
      checked: true
    }
  },
  methods: {
    submitForm () {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>

<style lang="less" scoped>
.login-warp {
    width: 100%;
    height: 100%;
    margin: 0;
    padding:0;
    background-image: url('http://img3.redocn.com/tupian/20141121/kejibeijing_3588973.jpg');
    background-size: 100%;
}
.login {
  position: absolute;
  right: 20%;
  bottom: 30%;
  width: 350px;
  height: 300px;
  border: 1px solid #7f7f7f ;
  padding: 10px;
  border-radius: 10px;
}
.login-title{
    letter-spacing: 2px;
    text-align: center;
}
</style>
