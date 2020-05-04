<template>
    <div class="register flexCol1">
        <Header _className="header flexCol0" title="忘记密码" :on-press-left="goBack"/>
        <div class="flexCol1 overflowY">
        <div class="container">
            <div class="input_from">
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
                        <CodeView :mobile="mobile" type="2" />
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

            </div>

            <FullButton title="提 交" :onClick="onForgot"/>
        </div>
        </div>
    </div>
</template>

<script>
    import FullButton from "../../components/FullButton";
    import Header from "../../components/Header";
    import CodeView from '../../components/CodeView'

    export default {
        name: "Forgot",
        components: {Header, FullButton, CodeView},
        data() {
            return {
                mobile: '13476260156',
                code: '',
                password: '',
                confirmPassword: '',
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            async onForgot() {
                if (!this.mobile) {
                    return this.$toast('信息未填写完');
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
            border-bottom: 1px solid #333;
            padding-right: 0;
            padding-left: 0;
            width: auto;
            margin-top: 10PX;
        }

    }
</style>
