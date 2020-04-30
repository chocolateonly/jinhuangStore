<template>
    <div class="order-item">
        <div class="item-header flexRow0 jc-sb ai-center">
            <div class="order-num">订单号：{{v.orderNum}}</div>
            <div class="order-time">{{v.createTime}}</div>
        </div>

        <div class="item-content flexRow0">
            <div class="item-img">
                <img :src="v.img" alt="">
            </div>
            <div class="item-info flexCol1 jc-sb">
                <div class="info-title text-line-1">{{v.name}}</div>
                <div class="info-content">
                    <div class="info-sub text-line-1">规格：{{v.size}}</div>
                    <div class="info-sub flexRow1">
                        <div class="flexRow1 ai-center text-line-1">
                            <img src="../../../assets/buycenter/icon_gou.png" alt="">
                            <span class="text-line-1">￥{{v.buy_m}}</span>
                        </div>
                        <div class="flexRow1 ai-center text-line-1">
                            <img src="../../../assets/buycenter/icon_xian.png" alt="">
                            <span class="text-line-1">￥{{v.cur_m}}</span>
                        </div>
                    </div>
                    <div class="info-sub text-line-1">货币增减：￥{{v.huobi}}</div>
                    <div class="info-sub text-line-1">数量：x{{v.num}}</div>
                </div>
            </div>
        </div>

        <div class="item-footer flexRow0 jc-sb ai-center">
            <div class="order-money text-line-1"> 预付款金额：￥{{v.money}}</div>
            <div class="order-btn lg-bg-red">全部卖出</div>
            <!--            <div class="order-btn lg-bg-yellow buy-again">再次购买</div>-->
        </div>

    </div>
</template>

<script>
    export default {
        name: "OrderItem",
        props: {
            v: Object,
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
