<template>
    <Layout title="余额提现" :go-back="goBack">
        <div class="header-right-btn" @click="goPage('/getCashRecord')">
            提现记录
        </div>

        <div class="main" slot="content">

            <div class="title">选择提现方式</div>

            <van-radio-group class="pay-methods-list" v-model="payWay">
                <van-cell-group>

                    <van-cell class="pay-methods-item  text-line-1"
                              v-for="(v,i) in bankcardList" :title="`${v.name}  ${v.number}${v.name}  ${v.number}`" :key="i"
                              clickable @click=" payWay = v.id">
                        <template #icon>
                            <img :src="v.img" alt="">
                        </template>
                        <template #right-icon>
                            <van-radio :name="v.id"
                                       checked-color="#BC0203"/>
                        </template>
                    </van-cell>

                </van-cell-group>
            </van-radio-group>



            <div class="title">提现金额</div>
            <div class="input-box">
            <div class="input-wrap">
                <van-field v-model="money" type="number" label="￥"
                           placeholder="提现额度不低于100元"
                           label-align="left"
                           input-align="right" />
            </div>

            <div class="input-footer text-line-1">
                <span class="jine">可提现金额：{{jine}}元</span>  <span class="shouxufei">手续费：{{shouxufei}}元</span>
            </div>
            </div>


            <div class="save-btn lg-bg-red flexCol0 ai-center" @Click="onSubmit">
                <span>立即提现</span>
            </div>

        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";

    export default {
        name: "GetCash",
        components: {Layout},
        data() {
            return {
                bankcardList: [
                    {
                        id: 0,
                        name: '工商银行',
                        number: '**** **** **** 5697',
                        img: require('../../../assets/me/icon_gh.png')
                    },
                    {
                        id: 2,
                        name: '工商银行',
                        number: '**** **** **** 5697',
                        img: require('../../../assets/me/icon_gh.png')
                    },
                ],
                payWay: 0,
                money:'',
                jine:'1326',
                shouxufei:'2112'
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            goPage(url) {
                this.$router.push(url)
            },
            onSubmit(){

            }
        },

    }
</script>

<style lang="less" scoped>
    .main {
        text-align: left;
    }
.header-right-btn{
    color: #fff;
}
    .pay-methods-list {
        text-align: left;
        margin-bottom: 80px;
        margin-top: 40px;

        img {
            width: 50px;
            height: 50px;
            display: block;
            margin-right: 20px;
        }

        .van-cell-group {
            background: transparent;
        }

        .pay-methods-item {
            background: transparent;
            .van-cell__title{
                min-width: 0;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }

    .input-box{
        background: #fff;
        padding: 20px 0;
        margin-top: 20px;
        margin-bottom: 40px;
        .title{
            margin-bottom: 10px;
        }
        .input-footer{
            margin: 0 20px;
            padding-top: 20px;
            border-top: 2px solid #eee;
        }
    }
    .save-btn{
        width: 610px;
        padding: 24px 0;
        text-align: center;
        margin: 0 auto;
    }
</style>
