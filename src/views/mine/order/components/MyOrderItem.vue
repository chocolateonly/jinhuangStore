<template>
    <div class="order-item">
        <div class="item-header flexRow0 jc-sb ai-center">
            <div class="order-num">订单号：{{v.parent_sn}}</div>
            <div class="order-time">{{v.create_time}}</div>
        </div>

        <div class="item-content flexRow0" v-for="(child,index) in v.plist" :key="`c_${index}`">
            <div class="item-img">
                <img :src="child.image" alt="">
            </div>
            <div class="item-info flexCol1 jc-sb">
                <div class="info-title text-line-1">{{child.product_name}}</div>
                <div class="info-content flexRow1 jc-sb">
                    <div class="info-sub text-line-1">数量：x{{child.num}}</div>
                    <div class="order-money text-line-1">￥{{child.price}}</div>
                </div>
            </div>
        </div>

        <!--status  1待付款  2待收货  3待评价-->
        <div class="item-footer flexRow0 jc-sb ai-center" v-if="v.status==='1'">
            <div class=" flexRow1 text-line-1"></div>
            <div class="right-btn flexRow1  ai-center">
                <div class="order-btn lg-bg-gray buy-again" @click="delOrder">取消订单</div>
                <div class="order-btn lg-bg-red" @click="goPay">去付款</div>
            </div>

        </div>

        <div class="item-footer flexRow0 jc-sb ai-center" v-else-if="v.status==='2'">
            <div class=" flexRow1 text-line-1"></div>
            <div class="right-btn flexRow1  ai-center">
                <div class="order-btn lg-bg-red" @click="goConfirm">确认收货</div>
            </div>

        </div>

        <div class="item-footer flexRow0 jc-sb ai-center" v-else-if="v.status==='4'">
            <div class=" flexRow1 text-line-1"></div>
            <div class="right-btn flexRow1  ai-center">
                <div class="order-btn lg-bg-red" @click="goComment">去评价</div>
            </div>

        </div>

    </div>
</template>

<script>
    import {serviceApi} from "../../../../services/apis";
    import global from "../../../../components/global";

    export default {
        name: "MyOrderItem",
        props: {
            v: Object,
        },
        methods:{
            goComment(){
                this.$router.push(`/orderComment/${this.v.id}`)
            },
            async delOrder(){

                const params = {
                    hasToken: true,
                    id:this.v.id,
                }

                try {
                    await serviceApi.delOrder(params)
                    this.$router.go(0)
                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            },
             goPay(){
                this.$router.push(`/payOrder/${this.v.id}`)
            },
            async goConfirm(){

                const params = {
                    hasToken: true,
                    id: this.$route.params.id,
                }

                try {
                    await serviceApi.confirmOrder(params)
                    this.$router.go(0)
                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            },
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
            font-size: 26px;

            .order-time {
                color: #666;
            }
        }

        .item-content {
            padding: 20px 0;

            border-bottom: 1px solid #eee;
            border-top: 1px solid #eee;

            .item-img {
                width: 100px;
                height: 100px;
                margin-right: 20px;

                img {
                    width: 100px;
                    height: 100px;
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
                font-size: 24px;
                color: #666;

                img {
                    width: 32px;
                    height: 32px;
                    margin-right: 10px;
                }
            }

        }

        .order-money {
            font-size: 26px;
            color: #FB315D;
        }

        .item-footer {
            padding: 20px 0;

            .right-btn {
                justify-content: flex-end;

                .order-btn {
                    margin-left: 10px;
                    padding: 10px 20px;
                    min-width: 100px;
                    border-radius: 40px;
                }
            }

        }

    }
    .lg-bg-gray{
        background: linear-gradient(#969696, #7b7878);
        color: #fff;
    }
</style>
