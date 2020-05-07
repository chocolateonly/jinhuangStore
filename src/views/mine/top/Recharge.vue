<template>
    <Layout title="充值余额" :go-back="goBack">
        <div class="header-right-btn"  @click="goPage('/rechargeList')">
            充值记录
        </div>
        <div class="main flexGrow1" slot="content">

            <div class="yue lg-bg-red">
                    <div class="title">钱包余额</div>
                    <div class="money text-line-1">{{yue}}</div>
            </div>

            <div class="money-select-box">


                <div class="money-item" v-for="(v,i) in moneyList" :key="i">
                     <van-tag v-if="selected_color===v" type="primary" color="#BC0203"
                              @click="selectedColor(v)" size="large">{{v}}</van-tag>
                     <van-tag v-else plain  type="primary" color="#323232"
                              @click="selectedColor(v)" size="large">{{v}}</van-tag>
                </div>


                    <div class="zdy">
                        <van-field v-model="sdyMoney" type="number" label="自定义"
                                   placeholder="自定义金额不低于1万"
                                   label-align="left"
                                   input-align="right" />
                    </div>


                <van-radio-group class="pay-methods-list" v-model="payWay">
                    <van-cell-group>

                        <van-cell class="pay-methods-item"
                                  v-for="(v,i) in payMethods" :title="v.name" :key="i"
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


                <div class="save-btn lg-bg-red flexCol0 ai-center" @Click="onSubmit">
                    <span>充 值</span>
                </div>


            </div>

        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";
    import {serviceApi} from "../../../services/apis";
    import global from "../../../components/global";

    export default {
        name: "Recharge",
        components: {Layout},
        data() {
            return {
                yue:'0',
                moneyList:['1万元','3万元','5万元','10万元'],
                selected_color:'',
                sdyMoney:'',

                payMethods: [
                    {id: 0, name: '微信支付', img: require('../../../assets/home/pay/icon_wx.png')},
                    {id: 1, name: '支付宝支付', img: require('../../../assets/home/pay/icon_zfb.png')},
                ],
                payWay: 0
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            selectedColor(item){
                this.selected_color=item
            },
            onSubmit(){

            },
            goPage(url){
                this.$router.push(url)
            },

        },
        mounted() {
            this.selected_color=this.moneyList[0]
        },
        async beforeCreate() {
            const params = {
                hasToken: true
            }

            try {
                const res = await serviceApi.getRechargeData(params)
                this.yue = res.data.balance
                //this.moneyList=
            } catch (e) {
                global.showErrorTip(e.msg, this)
            }
        }
    }
</script>

<style lang="less" scoped>
    .main {
        text-align: left;
    }

    .header-right-btn {
        color: #fff;
    }

    .yue{
        padding: 30px;
        text-align: center;
        .money{
            font-size: 40px;
            font-weight: 400;
            margin-top: 10px;
        }
    }

    .money-select-box{
        margin-top: 20px;
    }
    .money-item{
        display: inline-block;
        margin-bottom: 20px;
        margin-right: 20px;
        span{
            padding: 30px 50px;
        }
    }

    .money-item.zdy{
        width: 100%;
        background: #fff;
        border-radius: 5px;
        border: 1px solid #ebedf0 ;
    }
    .save-btn{
        width: 610px;
        padding: 24px 0;
        text-align: center;
        margin: 0 auto;
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
        }
    }
</style>
