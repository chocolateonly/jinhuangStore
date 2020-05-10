<template>
    <div class="login">
         <div class="login_bg"></div>
        <div class="logo">
            <van-image class="logo_img" :src="require('../../assets/logo.png')"/>
        </div>

        <div class="container">
            <div class="input_from">
            <van-field
                    class="input"
                    autosize
                    v-model="username"
                    :left-icon="require('../../assets/login/icon_user.png')"
                    placeholder="请输入账号"
            />

            <van-field
                    class="input"
                    autosize
                    type="password"
                    v-model="password"
                    :left-icon="require('../../assets/login/icon_lock.png')"
                    placeholder="请输入密码"
            />
            </div>
            <FullButton title="登 录" :onClick="onLogin"  />
            <FullButton title="注 册" :onClick="onRegister" _className="register_btn" />

            <a class="forgot"  @click="onForgot">忘记密码？</a>
        </div>
    </div>
</template>

<script>
    import FullButton from "../../components/FullButton";
    import {serviceApi} from "../../services/apis";
    import global from "../../components/global";
    import {storageData, StorageKey} from "../../utils";
    export default {
        name: "Login",
        components: {FullButton},
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods:{
            async onLogin(){

                if (!this.username) {
                    return this.$toast('手机号必填');
                }
                if (!this.password) {
                    return this.$toast('密码必填');
                }
                try {
                    const res=await serviceApi.login({
                        username: this.username,
                        password: this.password
                    })
                    await storageData(res.data);
                    this.$router.replace('/tab/home')
                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }

            },
            onRegister(){
               this.$router.push('Register')
            },
            onForgot(){
                this.$router.push('Forgot')
            }
        },
        mounted() {//清缓存
            localStorage.removeItem(StorageKey);
        }
    }
</script>

<style lang="less" scoped>
    .login_bg{
        background: url("../../assets/login/login_bg.png") no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
    .login {
        position: relative;
        width: 100%;
        height: 100%;


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
            border-bottom: 2px solid #333;
            padding-right: 0;
            padding-left: 0;
            width: auto;
        }

        .register_btn {
            background: url("../../assets/login/register_btn.png") no-repeat;
            background-size: contain;
            color: #666;
        }

        .forgot{
            font-size: 24px;
        }
    }
</style>
