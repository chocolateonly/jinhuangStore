<template>
    <div class="home flexCol1">

        <img :src="require('./../assets/home/banner_header.png')" class="header-banner"/>

        <Notice v-show="data.notice.title" :data="data.notice"/>

        <div class="container">
            <!--info-->
            <div class="info flexCol0">

                <div class="flexRow1 jc-sb">
                    <div class="flexCol1 mr5">

                        <div class="gnjj text-line-1">国内金价</div>
                        <div class="top-left theme-color">
                            <span>￥</span>
                            <span class="font50">{{int()}}</span>
                            <span>{{dec()}}</span>
                        </div>

                    </div>

                    <div class="flexCol0">
                        <div class="img" @click="goBuyCenter">
                            <img :src="require('../assets/home/in_sc.png')" alt="">
                        </div>
                        <div class="img"><img :src="require('../assets/home/in_zn.png')" alt=""></div>
                    </div>
                </div>

                <div class="flexRow1 jc-sb ai-center">
                    <div class="flexCol1 ">

                        <div class="gnjj text-line-1">今日交易量</div>
                        <div class="top-left color3 text-line-1">
                            <span>￥</span>
                            <span class="font50">{{int(data.today_num)}}</span>
                            <span>{{dec(data.today_num)}}</span>

                        </div>

                    </div>

                    <div class="flexCol0 sp"></div>

                    <div class="flexCol1 history-data">

                        <div class="gnjj text-line-1">历史交易量</div>
                        <div class="top-left color3 text-line-1">
                            <span>￥</span>
                            <span class="font50">{{int(data.nums)}}</span>
                            <span>{{dec(data.nums)}}</span>
                        </div>

                    </div>
                </div>

            </div>
            <!--banner-->
            <div class="banner">
                <img src="../assets/home/banner.png" class="banner">
            </div>

            <!--hot productions-->
            <div class="hot-productions">
                <div class="hot-header flexRow0 jc-sb ai-center">
                    <div class="header-left">
                        <TitleCore />
                        <span>热门产品</span>
                    </div>
                    <div class="header-right" @click="$router.push('/productionList')">
                        更多
                    </div>
                </div>
                <!-- productions-->
                <div class="productions flexRow1">
                    <div class="production-wrapper" v-for="(v,i) in data.hotlist" :key="i">
                        <ProductionItem :v="v" :i="i" :handleClick="goProductionDetails"/>
                    </div>
                </div>

            </div>
        </div>

        <!-- shopping cart-->
        <div class="shopping-cart-btn" @click="goShoppingCart">
            <img src="../assets/home/shpping-cart.png" alt="">
        </div>
    </div>
</template>

<script>
    import ProductionItem from "./product/components/ProductionItem";
    import TitleCore from './../components/TitleCore'
    import Notice from "../components/Notice";
    import {serviceApi} from "../services/apis";
    import global from "../components/global";
    export default {
        name: 'Home',
        components: {Notice, ProductionItem,TitleCore},
        data() {
            return {
                data:{
                    notice:{},
                    nums:'',
                    today_num:'',
                    hotlist:[]
                }
            }
        },
        methods: {
            int(val = '330.07') {
                return val.substring(0, val.lastIndexOf('.') + 1)
            },
            dec(val = '330.07') {
                return val.substring(val.lastIndexOf('.') + 1)
            },
            goBuyCenter() {
                this.$router.push('BuyCenter')
            },
            goProductionDetails() {
                this.$router.push('/productionDetails')
            },
            goShoppingCart() {
                this.$router.push('/shoppingCart')
            },
        },
        async mounted() {
            try {
                const res=await serviceApi.getHomeData({})
                this.data={...this.data,...res.data}
            }catch (e) {
                global.showErrorTip(e.msg, this)
            }
        }
    }
</script>
<style lang="less" scoped>
    .home {
        background: url("../assets/common/_bg.png") no-repeat;
        background-size: cover;

        .header-banner {
            height: 400px
        }

        .container {
            margin: 0 30px;

            .info {
                margin-top: 30px;
                height: 3rem;
                padding: 30px;
                background: url("../assets/home/info_bg.png") no-repeat;
                background-size: cover;

                .gnjj {
                    font-size: 30px;
                    color: rgba(102, 102, 102, 1);
                    text-align: left;
                }

                .top-left {
                    font-size: 30px;
                    text-align: left;
                }

                .img img {
                    width: 150px;
                }

                .sp {
                    border-left: 1px solid #ccc;
                    height: 60%;
                    padding: 0 20px;
                }
            }

            .banner {
                width: 100%;
                margin-top: 10px;
            }

            .hot-productions {
                .hot-header {
                    margin: 20px 0;
                }

                .header-left {
                    font-size: 32px;
                    color: #333;
                }

                .header-right {
                    color: #666;
                    font-size: 24px;
                }
            }
        }
        .productions {
            flex: 2;
            flex-direction: row;
            flex-wrap: wrap;

            .production-wrapper {
                width: 50%;
            }
        }
        .shopping-cart-btn img {
            width: 147px;
            height: 147px;
            position: fixed;
            bottom: 120px;
            right: 20px;
        }
    }
</style>
