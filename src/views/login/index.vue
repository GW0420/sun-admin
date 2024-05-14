<template>
  <div class="container">
    <vue-particles
      class="login-background"
      color="#409EFF"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="6"
      linesColor="#409EFF"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <div class="login-box">
      <p>Login</p>
      <form>
        <div class="user-box">
          <input name="" type="text" v-model="username" />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input name="" type="password" v-model="password" />
          <label>Password</label>
        </div>
        <el-button :loading="loading" @click="onLoginClick">Submit</el-button>
      </form>
      <div class="user-desc">
        Don't have an account?
        <a href="" class="a2">Sign up!</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { login } from "@/api/modules/sys"
import { ElMessage } from "element-plus"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { ref } from "vue"
import md5 from "md5"

const router = useRouter()
const store = useStore()
const username = ref("super-admin")
const password = ref("123456")
const loading = ref(false)

const onLoginClick = () => {
  loading.value = true
  store.dispatch("login/useLogin", "vgfdghrtuytnhg")
  setTimeout(() => {
    ElMessage.success("登录成功")
    loading.value = false
    router.push("/")
  }, 1000)
  // login({ username: username.value, password: md5(password.value) }).then(res => {
  //   store.dispatch("login/useLogin", res.data.token)
  //   setTimeout(() => {
  //     ElMessage.success(res.message)
  //     loading.value = false
  //     router.push("/")
  //   }, 1000)
  // })
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.login-background {
  //可设置背景图 铺满屏
  // background: linear-gradient(-180deg, #dceaf2 0%, #03e9f4fff 100%);
  //background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
  background: linear-gradient(#141e30, #243b55);
  width: 100%;
  height: 100%;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  width: 550px;
  height: 420px;
  // background-color: #d0dded;
  border-radius: 10px;
  box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.6);
  padding: 40px;
  box-sizing: border-box;
}

.login-box p:first-child {
  margin: 0 0 30px;
  padding: 0;
  color: #03e9f4;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #03e9f4;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #03e9f4;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #03e9f4;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-box a.a2 {
  color: #03e9f4;
  text-decoration: none;
}

.login-box a.a2:hover {
  background: transparent;
  color: #aaa;
  border-radius: 5px;
}
.user-desc {
  margin: 20px 0;
  color: #aaa;
}

.el-button {
  border: none;
  color: #03e9f4;
  width: 100%;
  background: linear-gradient(to right, #03e9f4, #05686d);
  &:hover {
    color: #03e9f4;
  }
}
</style>
