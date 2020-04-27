<template>
    <div class="login">

        <div class="logo">
            <van-image width="100" height="100" :src="require('../assets/logo.png')" />
        </div>

        <div class="container">
        <van-field
                class="input"
                v-model="username"
                :left-icon="require('../assets/login/icon_user.png')"
                placeholder="显示图标"
        />

        <van-field
                class="input"
                v-model="username"
                :left-icon="require('../assets/login/icon_lock.png')"
                placeholder="显示图标"
        />

        <button class="login_btn">
            登录
        </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
             username:'',
             password:''
            }
        }
    }
</script>

<style lang="less">
.login{
    width:100%;
    height:100%;
    background: url("../assets/login/login_bg.png") no-repeat;
    background-size:cover;
    .logo{
        padding-top: 212px;
    }
    .container{
        width:610px;
        //

    }
    .input{
        background: transparent;
        border-bottom: 1px solid #333;
        padding-right: 0;
        padding-left: 0;
        margin-left: 50px;
        margin-right: 50px;
        width: auto;
    }
    .login_btn{
        width:100%;
        height:88px;
        background: url("../assets/login/login_btn.png") no-repeat;
        background-size:cover;
    }
}
</style>
