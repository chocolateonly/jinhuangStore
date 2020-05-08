<template>
    <div class="register flexCol1">
        <Header _className="header " title="电子合约签署" :on-press-left="goBack"/>
        <div class="flexCol1 overflowY">
            <div class="container ">
                <div class="input_from">

                    <p class="content">
                       {{content}}
                    </p>

<!--                    <van-checkbox class="read-content" v-model="hasRead" icon-size="18px" checked-color="#BC0203">-->
<!--                        已阅读并同意签署<a class="xieyi">《电子合约》</a>-->
<!--                    </van-checkbox>-->

                </div>

<!--                <FullButton title="签署合同" :onClick="onSubmit" _className="btn"/>-->
            </div>
        </div>

    </div>
</template>

<script>
   // import FullButton from "../../components/FullButton";
    import Header from "../../components/Header";
    import {serviceApi} from "../../services/apis";
    import global from "../../components/global";

    export default {
        name: "Contract",
        components: {Header,
            // FullButton
        },
        data() {
            return {
                content:'',
                hasRead: false
            }
        },

        methods: {
            goBack() {
                this.$router.go(-1)
            },
            async getContract() {
                try {
                   const res= await serviceApi.getUserAgreement({})
                    this.content=res.data.user_agreement
                } catch (e) {
                    global.showErrorTip(e.msg,this)
                }
            },
            async onSubmit() {
                if (!this.username) {
                    return this.$toast('请勾选已阅读');
                }
            }
        },
        mounted() {
            (async () => await this.getContract())()
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

        .content {
            font-size: 20px;
            color: #222;
            text-align: left;

        }

        .read-content {
            font-size: 24px;
            margin-top: 30px;
        }

        .xieyi {
            color: #BC0203
        }

        .btn {
            background: url("../../assets/common/sq_full_btn.png") no-repeat;
            background-size: cover;
        }
    }
</style>
