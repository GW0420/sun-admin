<template>
  <div class="container">
    <vue-particles class="login-background" color="#409EFF" :particleOpacity="0.7" :particlesNumber="60" shapeType="circle" :particleSize="6" linesColor="#409EFF" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push"></vue-particles>
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
        <div class="user-btn" @click="onLoginClick">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </div>
      </form>
      <div class="user-desc">
        Don't have an account?
        <a href="" class="a2">Sign up!</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { login } from "@/api/modules/sys"
import { reactive, ref } from "vue"
import md5 from "md5"

const username = ref<number>()
const password = ref<number>()

const onLoginClick = () => {
  login({ username: username.value, password: md5(password.value) }).then(res => {
    console.log(res)
  })
}
</script>

<style lang="scss">
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
  background-color: #d0dded;
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

.login-box form .user-btn {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 3px;
  cursor: pointer;
}

.login-box .user-btn:hover {
  border-radius: 5px;
  color: #03e9f4;
  transition: all 1s linear;
}

.login-box .user-btn span {
  position: absolute;
  display: block;
}

.login-box .user-btn span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1.5s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

.login-box .user-btn span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1.5s linear infinite;
  animation-delay: 0.375s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }

  50%,
  100% {
    top: 100%;
  }
}

.login-box .user-btn span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1.5s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }

  50%,
  100% {
    right: 100%;
  }
}

.login-box .user-btn span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1.5s linear infinite;
  animation-delay: 1.125s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }

  50%,
  100% {
    bottom: 100%;
  }
}

.login-box p:last-child {
  color: #aaa;
  font-size: 14px;
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
</style>
