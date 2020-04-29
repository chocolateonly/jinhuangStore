<template>
    <div class="bg flexCol1">

        <Header title="订单支付" _className="header flexCol0 clearBorder" :on-press-left="goBack"></Header>

        <div class=" flexCol1 overflowY">
            <div class="content">
                <div class="time-tip">支付剩余时间</div>

                <TimeCountDown/>

                <div class="order-info flexRow0 ">
                    <div class="prod-img">
                        <img src="../../assets/home/home_mock1.png" alt="">
                    </div>

                    <div class="flexGrow1">
                        <div class="flexRow0 jc-sb">
                            <div class="order-title flexGrow1 text-line-1">
                                {{orderInfo.title}}
                            </div>

                            <div class="order-num">
                                x{{orderInfo.number}}
                            </div>
                        </div>
                        <div class="money">
                            <span>￥</span>
                            <span class="font50">{{int()}}</span>
                            <span>{{dec()}}</span>
                            <span class="jindou">金豆{{orderInfo.jindou}}</span>
                        </div>
                    </div>
                </div>

                <!-- 支付方式-->
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


                <FullButton title="确认支付" :onClick="onPay" _className="btn"/>

            </div>
        </div>

    </div>
</template>

<script>
    import Header from "../../components/Header";
    import TimeCountDown from "../../components/TimeCountDown";
    import FullButton from "../../components/FullButton";

    export default {
        name: "PayOrder",
        components: {FullButton, TimeCountDown, Header},
        data() {
            return {
                payMethods: [
                    {id: 0, name: '微信支付', img: require('../../assets/home/pay/icon_wx.png')},
                    {id: 1, name: '支付宝支付', img: require('../../assets/home/pay/icon_zfb.png')},
                    {id: 2, name: '余额（100.12元）', img: require('../../assets/home/pay/icon_ye.png')},
                    {id: 3, name: '金豆（2032）', img: require('../../assets/home/pay/icon_jindou.png')},
                ],
                orderInfo: {
                    title: '周先生周先生周先生周先生周先生周先生周先生周先生周先生周先生周先生周先生周先生',
                    money: '989.00',
                    jindou: '2325',
                    number: 1
                },
                payWay: 0
            }
        },
        methods: {
            int(val = '330.07') {
                return val.substring(0, val.lastIndexOf('.') + 1)
            },
            dec(val = '330.07') {
                return val.substring(val.lastIndexOf('.') + 1)
            },
            goBack() {
                this.$router.go(-1)
            },
            onPay() {

            }
        }
    }
</script>

<style lang="less" scoped>
    .bg {
        height: 100%;
        background: url("../../assets/common/bg.png") no-repeat;
        background-size: cover;
    }

    .content {
        padding: 30px;
        font-size: 30px;
    }

    .time-tip {
        font-size: 22px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 40px;
        padding: 30px 0 20px 0;
    }

    .order-info {
        padding: 20px;
        margin: 20px 0;

        .prod-img {
            margin-right: 20px;
            width: 90px;
            height: 90px;
        }

        img {
            width: 90px;
            height: 90px;
            display: block;
        }
    }

    .order-title {
        font-weight: 400;
        color: rgba(33, 33, 33, 1);
        line-height: 41px;
        text-align: left;
    }

    .money {
        margin-right: 10px;
        color: #FD2049;
        text-align: left;

        .jindou {
            color: #999;
            font-size: 24px;
            padding-left: 10px;
        }
    }

    .pay-methods-list {
        text-align: left;
        margin-bottom: 80px;

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

    .btn {
        background: url("../../assets/common/sq_full_btn.png") no-repeat;
        background-size: cover;
    }
</style>
