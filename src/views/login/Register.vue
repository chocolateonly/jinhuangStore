<template>
    <div class="register flexCol1">
        <Header _className="header " title="用户注册" :on-press-left="goBack"/>
        <div class="flexCol1 overflowY">
            <div class="container">
                <div class="input_from">
                    <van-field
                            class="input"
                            autosize
                            v-model="username"
                            :left-icon="require('../../assets/login/icon_user.png')"
                            placeholder="请输入用户名"
                    />
                    <van-field
                            class="input"
                            autosize
                            type="tel"
                            v-model="mobile"
                            :left-icon="require('../../assets/login/icon_mobile.png')"
                            placeholder="请输入手机号码"
                    >
                        <!--获取验证码-->
                        <template #button>
                            <CodeView :mobile="mobile"  type="1"/>
                        </template>

                    </van-field>
                    <van-field
                            class="input"
                            autosize
                            type="number"
                            v-model="code"
                            :left-icon="require('../../assets/login/icon_email.png')"
                            placeholder="请输入短信验证码"
                    />
                    <van-field
                            class="input"
                            autosize
                            type="password"
                            v-model="password"
                            :left-icon="require('../../assets/login/icon_lock.png')"
                            placeholder="请输入登录密码"
                    />
                    <van-field
                            class="input"
                            autosize
                            type="password"
                            v-model="confirmPassword"
                            :left-icon="require('../../assets/login/icon_lock.png')"
                            placeholder="请确认登录密码"
                    />
                    <van-field
                            class="input"
                            autosize
                            v-model="recommendCode"
                            :left-icon="require('../../assets/login/icon_code.png')"
                            placeholder="请输入推荐码"
                    />

                    <van-checkbox class="read-content" v-model="hasRead" icon-size="18px" checked-color="#BC0203">
                        已阅读并同意本交易平台的<a class="xieyi" @click="showContract">《用户协议》</a>
                    </van-checkbox>

                </div>

                <FullButton title="注 册" :onClick="onRegister"/>
            </div>
        </div>
    </div>
</template>

<script>
    import FullButton from "../../components/FullButton";
    import Header from "../../components/Header";
    import CodeView from '../../components/CodeView'
    import global from "../../components/global";
    import {serviceApi} from "../../services/apis";

    export default {
        name: "Register",
        components: {Header, FullButton, CodeView},
        data() {
            return {
                username: '',
                mobile: '',
                code: '',
                password: '',
                confirmPassword: '',
                recommendCode: '',
                hasRead: false
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            showContract() {
                this.$router.push('Contract')
            },
            async onRegister() {
                if (!this.username) {
                    return this.$toast('用户名必填');
                }
                if (!this.mobile) {
                    return this.$toast('手机号必填');
                }
                if (!this.code) {
                    return this.$toast('短信验证码必填');
                }
                if (!this.password) {
                    return this.$toast('密码必填');
                }
                if (!this.confirmPassword) {
                    return this.$toast('确认密码必填');
                }

                if (this.password !== this.confirmPassword) {
                    return this.$toast('密码输入不一致');
                }
                if (!this.hasRead) return this.$toast('请勾选并同意用户协议');

                const params = {
                    nickname: this.username,
                    mobile: this.mobile,
                    code: this.code,
                    password: this.password,
                    password1: this.confirmPassword,
                    invite_code: this.recommendCode,
                    sta:this.hasRead?'2':'1'
                }

                try {
                    await serviceApi.register(params)
                    this.goBack()
                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }


            }
        }
    }
</script>

<style lang="less" scoped>

    .register {
        width: 100%;
        height: 100%;
        background: url("../../assets/common/_bg.png") no-repeat;
        background-size: cover;

        .container {
            width: 610px;
            margin: 0 auto;
        }

        .input_from {
            margin: 0px 0 50px 0;
        }

        .input {
            background: transparent;
            border-bottom: 2px solid #333;
            padding-right: 0;
            padding-left: 0;
            width: auto;
            margin-top: 10PX;
        }

        .read-content {
            font-size: 24px;
            margin-top: 30px;
        }

        .xieyi {
            color: #BC0203
        }
    }
</style>
