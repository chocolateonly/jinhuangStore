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
                <div class="info-content flexRow1">
                    <div class="info-sub text-line-1">数量：x{{v.num}}</div>
                    <div class="order-money text-line-1">￥{{v.money}}</div>
                </div>
            </div>
        </div>

        <div class="item-footer flexRow0 jc-sb ai-center">
            <div class="order-btn lg-bg-red">去付款</div>
            <!--            <div class="order-btn lg-bg-yellow buy-again">再次购买</div>-->
        </div>

    </div>
</template>

<script>
    export default {
        name: "MyOrderItem",
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
