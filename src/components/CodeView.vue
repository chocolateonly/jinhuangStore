<template>
    <div class="sms-view">
        <van-button v-if="showView===0" size="small" round color="#BC0203" @click="getCode">获取验证码</van-button>
        <van-button class="timer" v-else-if="showView===1" size="small" round color="#BC0203">{{time}}s</van-button>
        <van-button v-else size="small" round color="#BC0203" @click="getCode">重新发送</van-button>
    </div>
</template>

<script>
    import validator from 'validator'
    import global from "./global";
    import {serviceApi} from "../services/apis";
    export default {
        name: "CodeView",
        props: {
            mobile: String,
            type:String
        },
        data() {
            return {
                showView: 0, //0:获取验证码按钮  1：显示时间 2：显示重新发送按钮
                time: 59,
                interval: null
            }
        },
        methods: {
            setTimer() {
                const tick = () => {
                    if (this.time === 0) {
                        clearInterval(this.interval)
                        this.time = 59
                        this.showView = 2
                    } else this.time--
                }
                this.interval = setInterval(() => tick(), 1000)
            },
           async getCode() {
                if (!validator.isMobilePhone(this.mobile)) {
                    return this.$toast('请输入正确手机号');
                }
                //todo:发送验证码请求
                //
                try {
                    await serviceApi.sendMsg({
                        type:this.type,
                        mobile:this.mobile
                    })
                }catch (e) {
                    global.showErrorTip(e.msg, this)
                }

                this.setTimer()
                this.showView = 1
            }
        }
    }
</script>

<style lang="less" scoped>
    .sms-view {
        width: 100%;
        min-width: 100px;
        text-align: center;
    }
</style>
