<template>
    <div class="order-item">
        <div class="item-header flexRow0 jc-sb ai-center">
            <div class="order-num">订单号：{{v.order_sn}}</div>
            <div class="order-time">{{v.buy_time}}</div>
        </div>

        <div class="item-content flexRow0">
            <div class="item-img">
                <img :src="v.image" alt="">
            </div>
            <div class="item-info flexCol1 jc-sb">
                <div class="info-title text-line-1">{{v.gold_name}}</div>
                <div class="info-content">
                    <div class="info-sub text-line-1">规格：{{v.weight}} g</div>
                    <div class="info-sub flexRow1">
                        <div class="flexRow1 ai-center text-line-1">
                            <img src="../../../assets/buycenter/icon_gou.png" alt="">
                            <span class="text-line-1">￥{{v.price}}</span>
                        </div>
                        <div class="flexRow1 ai-center text-line-1">
                            <img src="../../../assets/buycenter/icon_xian.png" alt="">
                            <span class="text-line-1">￥{{curPrice}}</span>
                        </div>
                    </div>
                    <!-- fixme:单价 现价-->
                    <div class="info-sub text-line-1">货币增减：￥{{profit_money}}</div>
                    <div class="info-sub text-line-1">数量：x{{v.num}}</div>
                </div>
            </div>
        </div>
        <!--0已取消  1待付款  2进行中  3已卖出-->
        <div class="item-footer flexRow0 jc-sb ai-center">
            <div class="order-money text-line-1"> 预付款金额：￥{{v.buy_money}}</div>
            <div class="order-btn lg-bg-red" v-show="type===0&&v.state==='2'" >全部卖出</div>
            <div class="order-btn lg-bg-yellow buy-again" v-show="type===1&&v.state==='2'" >再次购买</div>
        </div>

    </div>
</template>

<script>
    import {serviceApi} from "../../../services/apis";
    import global from "../../../components/global";

    export default {
        name: "OrderItem",
        props: {
            v: Object,
            type:Number
        },
        data() {
            return {
                curPrice: '',
                lastPriceInterval: null,
                profit_money:0
            }
        },
        mounted() {
            try {
                //实时获取金价
                this.lastPriceInterval = setInterval(async () => {
                    try {
                        const l_res = await serviceApi.getLastPrice()
                        this.curPrice = l_res.data.last_price
                        this.profit_money=(Number(l_res.data.last_price)-Number(this.v.price))*Number(this.v.num)*Number(this.v.weight)
                    } catch (e) {
                        clearInterval(this.lastPriceInterval)
                        global.showErrorTip(e.msg, this)
                    }
                }, 1000)
            } catch (e) {
                global.showErrorTip(e.msg, this)
            }
        },
        destroyed() {
            clearInterval(this.lastPriceInterval)
        }
    }
</script>

<style lang="less" scoped>
    .order-item {
        padding: 20px;
        background: #fff;
        font-size: 24px;
        color: #333333;
        margin-bottom: 20px;

        .item-header {
            padding-bottom: 20px;
        }

        .item-content {
            padding: 20px 0;
            height: 240px;

            border-bottom: 1px solid #eee;
            border-top: 1px solid #eee;

            .item-img {
                width: 240px;
                height: 240px;
                background: #fcc;
                margin-right: 20px;

                img {
                    width: 240px;
                    height: 240px;
                }
            }

            .item-info {
                text-align: left;

                .info-title {
                    font-size: 30px;
                    color: #333;
                }

            }

            .info-sub {
                padding: 2px 0;

                img {
                    width: 32px;
                    height: 32px;
                    margin-right: 10px;
                }
            }

        }

        .item-footer {
            padding: 20px 0;

            .order-btn {
                padding: 10px 20px;
                min-width: 100px;
            }
        }

    }
</style>
