<template>
    <vue-particles class="login-background" color="#409EFF" :particleOpacity="0.7" :particlesNumber="60" shapeType="circle"
        :particleSize="6" linesColor="#409EFF" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150"
        :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
    </vue-particles>
    <div class="container">
        <div class="header">Login</div>
        <div class="form-wrapper">
            <input type="text" name="username" placeholder="username" class="input-item" />
            <input type="password" name="password" placeholder="password" class="input-item" />
            <div class="btn">Login</div>
        </div>
        <div class="msg">
            Don't have account?
            <a href="#">Sign up</a>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.login-background {
    //可设置背景图 铺满屏
    // background: linear-gradient(-180deg, #dceaf2 0%, #ffffff 100%);
    background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
    width: 100%;
    height: 100%;
    position: relative;
}

.container {
    background-color: #fff;
    width: 358px;
    height: 588px;
    border-radius: 15px;
    padding: 0 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.header {
    font-size: 38px;
    font-weight: bold;
    text-align: center;
    line-height: 200px;
}

.input-item {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 0;
    padding: 10px;
    border-bottom: 1px solid rgb(128, 125, 125);
    font-size: 15px;
    outline: none;
}

.input-item:placeholder {
    text-transform: uppercase;
}

.btn {
    text-align: center;
    padding: 10px;
    width: 100%;
    margin-top: 40px;
    background-image: linear-gradient(to right, #a6c1ee, #fbc2eb);
    color: #fff;
}

.msg {
    text-align: center;
    line-height: 88px;
}

a {
    text-decoration-line: none;
    color: #abc1ee;
}
</style>
