<template>
    <div class="order-item">
        <div class="item-header flexRow0 jc-sb ai-center">
            <div class="order-num">订单号：{{v.parent_sn}}</div>
            <div class="order-time">{{v.create_time}}</div>
        </div>
<!---->
        <div v-show="v.status!=='4'">
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


            <div class="item-info flexCol1 jc-sb" style="margin-top:5px" v-show="v.status==='3'">
                <div class="info-content flexRow1 jc-sb">
                    <div class="info-sub text-line-1">
                        <span class="order-money text-line-1">{{v.plist[0].logistics_name}}</span>
                         快递单号：{{v.plist[0].logistics_no}}</div>

                </div>
            </div>



        <!--status  -1删除订单 1待付款  2待发货 3待收货  4待评价-->
        <div class="item-footer flexRow0 jc-sb ai-center" v-if="v.status==='-1'">
            <div class=" flexRow1 text-line-1"></div>
            <div class="right-btn flexRow1  ai-center">
                <div class="order-btn lg-bg-gray buy-again" @click="()=>delOrder(v)">删除订单</div>
            </div>

        </div>
        <div class="item-footer flexRow0 jc-sb ai-center" v-if="v.status==='1'">
            <div class=" flexRow1 text-line-1"></div>
            <div class="right-btn flexRow1  ai-center">
                <div class="order-btn lg-bg-gray buy-again" @click="()=>cancelOrder(v)">取消订单</div>
                <div class="order-btn lg-bg-red" @click="goPay">去付款</div>
            </div>

        </div>

        <div class="item-footer flexRow0 jc-sb ai-center" v-else-if="v.status==='2'">
            <div class=" flexRow1 text-line-1"></div>
            <div class="right-btn flexRow1  ai-center">
                <div class="order-btn" style="color:#e67717">待发货</div>
            </div>

        </div>

        <div class="item-footer flexRow0 jc-sb ai-center" v-else-if="v.status==='3'">
            <div class=" flexRow1 text-line-1"></div>
            <div class="right-btn flexRow1  ai-center">
                <div class="order-btn lg-bg-red" @click="()=>goConfirm(v)">确认收货</div>
            </div>

        </div>
        </div>

        <div v-show="v.status==='4'" v-for="(child,index) in v.plist" :key="`c_${index}`">
            <div class="item-content flexRow0" >
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

            <div class="item-footer flexRow0 jc-sb ai-center" v-show="child.status==='4'&&child.is_comment==='1'">
                <div class=" flexRow1 text-line-1"></div>
                <div class="right-btn flexRow1  ai-center">
                    <div class="order-btn lg-bg-red" @click="goComment">去评价</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyOrderItem",
        props: {
            v: Object,
            cancelOrder:Function,
            delOrder:Function,
            goConfirm:Function
        },
        data(){
          return {
          }
        },
        methods:{
            goComment(){
                this.$router.push(`/orderComment/${this.v.id}`)
            },
             goPay(){
                this.$router.push(`/payOrder/${this.v.id}`)
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
