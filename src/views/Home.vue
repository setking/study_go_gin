<template>
  <div class="home">
    <el-tabs :stretch="true" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="登录" name="first">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="注册" name="second">
        <el-form
          :model="signupForm"
          status-icon
          :rules="rules"
          ref="signupForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="newUsername">
            <el-input
              v-model="signupForm.newUsername"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="newPassword">
            <el-input
              type="password"
              v-model="signupForm.newPassword"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="再次输入密码" prop="re_password">
            <el-input
              type="password"
              v-model="signupForm.re_password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="signUp('signupForm')"
              >注册</el-button
            >
            <el-button @click="resetNewForm('signupForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { login, register } from "@/config/api/login";
import { setToken } from '@/utils/auth'

export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateNewUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validateNewPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateRePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      activeName: "first",
      ruleForm: {
        username: "",
        password: "",
      },
      signupForm: {
        newUsername: "",
        newPassword: "",
        newUserre_passwordname: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePass2, trigger: "blur" }],
        newUsername: [{ validator: validateNewUsername, trigger: "blur" }],
        newPassword: [{ validator: validateNewPass, trigger: "blur" }],
        re_password: [{ validator: validateRePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.ruleForm).then((res) => {
            if (res.code == 1000) {
                let Token = res.data 
                setToken(Token)
                this.$router.push({path: '/about'})
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    signUp(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.signupForm);
          register(this.signupForm).then((res) => {
            console.log(res);
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetNewForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}
</style>
