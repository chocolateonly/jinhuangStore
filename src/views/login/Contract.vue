<template>
    <div class="register flexCol1">
        <Header _className="header flexCol0" title="电子合约签署" :on-press-left="goBack"/>
        <div class="flexCol1 overflowY">
            <div class="container ">
                <div class="input_from">

                    <p class="content">
                        1、市场性质不同
                        外汇期货合约是在集中市场 (交易所) 交易，而外汇远期合约的交易则是在店头市场 (银行柜台) 进行。
                    </p>

                    <van-checkbox class="read-content" v-model="hasRead" icon-size="18px" checked-color="#BC0203">
                        已阅读并同意签署<a class="xieyi">《电子合约》</a>
                    </van-checkbox>

                </div>

                <FullButton title="签署合同" :onClick="onRegister" _className="btn"/>
            </div>
        </div>

    </div>
</template>

<script>
    import FullButton from "../../components/FullButton";
    import Header from "../../components/Header";

    export default {
        name: "Register",
        components: {Header, FullButton},
        data() {
            return {
                username: '',
                mobile: '13476260156',
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
            async onRegister() {
                if (!this.username) {
                    return this.$toast('信息未填写完');
                }
            }
        }
    }
</script>

<style lang="less">

    .register {
        width: 100%;
        height: 100%;
        background: url("../../assets/common/bg.png") no-repeat;
        background-size: cover;

        .container {
            width: 610px;
            margin: 0 auto;
        }

        .input_from {
            margin: 0px 0 50px 0;
        }

        .content {
          font-size: 20px;
            color:#222;
            text-align: left;

        }

        .read-content {
            font-size: 24px;
            margin-top: 30px;
        }

        .xieyi {
            color: #BC0203
        }
        .btn{
            background: url("../../assets/common/sq_full_btn.png") no-repeat;
            background-size: cover;
        }
    }
</style>
