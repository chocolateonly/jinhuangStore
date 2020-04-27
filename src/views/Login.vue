<template>
    <div class="login">

        <div class="logo">
            <van-image class="logo_img" :src="require('../assets/logo.png')"/>
        </div>

        <div class="container">
            <div class="input_from">
            <van-field
                    class="input"
                    autosize
                    v-model="username"
                    :left-icon="require('../assets/login/icon_user.png')"
                    placeholder="请输入账号"
            />

            <van-field
                    class="input"
                    autosize
                    v-model="password"
                    :left-icon="require('../assets/login/icon_lock.png')"
                    placeholder="请输入密码"
            />
            </div>
            <button class="login_btn" @click="onLogin">
                登 录
            </button>

            <button class="login_btn register_btn" @click="onRegister">
                注 册
            </button>
            <a class="forgot"  @click="onForgot">忘记密码？</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods:{
            onLogin(){
                console.log(this.username)
            },
            onRegister(){

            },
            onForgot(){
                console.log(this.username)
            }
        }
    }
</script>

<style lang="less">
    .login {
        width: 100%;
        height: 100%;
        background: url("../assets/login/login_bg.png") no-repeat;
        background-size: cover;

        .logo {
            padding-top: 212px;
            .logo_img{
                width:182px;
                height:182px;
            }
        }

        .container {
            width: 610px;
            margin: 0 auto;
        }
        .input_from{
            margin:100px 0 50px 0;
        }
        .input {
            background: transparent;
            border-bottom: 1px solid #333;
            padding-right: 0;
            padding-left: 0;
            width: auto;
        }

        .login_btn {
            width: 100%;
            height: 89px;
            background: url("../assets/login/login_btn.png") no-repeat;
            background-size: contain;
            color: #fff;
            font-size: 32px;
            margin-bottom: 32px;
            &:hover{
                opacity: 0.8;
            }
        }

        .register_btn {
            background: url("../assets/login/register_btn.png") no-repeat;
            background-size: contain;
            color: #666;
        }
        .forgot{
            font-size: 24px;
        }
    }
</style>
