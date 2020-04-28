<template>
    <div class="home flexCol1">

        <img :src="require('./../assets/home/banner_header.png')" class="header-banner"/>

        <van-notice-bar left-icon="volume-o" mode="closeable" :scrollable="true">
            这里是商城平台公告通知
        </van-notice-bar>


        <div class="container">
            <!--国内金价 info-->
            <div class="info flexCol1">

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
                        <div class="img"><img :src="require('../assets/home/in_sc.png')" alt=""></div>
                        <div class="img"><img :src="require('../assets/home/in_zn.png')" alt=""></div>
                    </div>
                </div>

                <div class="flexRow1 jc-sb ai-center">
                    <div class="flexCol1 ">

                        <div class="gnjj text-line-1">今日交易量</div>
                        <div class="top-left color3 text-line-1">
                            <span>￥</span>
                            <span class="font50">{{int()}}</span>
                            <span>{{dec()}}</span>

                        </div>

                    </div>

                    <div class="flexCol0 sp"></div>

                    <div class="flexCol1 history-data">

                        <div class="gnjj text-line-1">历史交易量</div>
                        <div class="top-left color3 text-line-1">
                            <span>￥</span>
                            <span class="font50">{{int()}}</span>
                            <span>{{dec()}}</span>
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
                        热门产品
                    </div>
                    <div class="header-right">
                        更多
                    </div>
                </div>

                <!-- productions-->
                <div class="productions flexRow1">
                    <div class="production-wrapper" v-for="(v,i) in hotProductions" :key="i">
                        <div class="production" :class="i%2===0?'mr':'ml'">
                            <img class="p-img" :src="v.img" alt="">

                            <div class="content text-line-2">
                                {{v.title}}
                            </div>

                            <div class="p-bottom flexRow1 jc-sb ai-center">
                                <div class="money">￥ {{v.money}}</div>
                                <div class="shoppingCart">
                                    <img src="../assets/home/icon_buycar.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                hotProductions: [
                    {title: '周大福十二生肖黄金红绳款 手链甄品', money: '2343', img: require('../assets/home/home_mock1.png')},
                    {title: '2周大福十二生肖黄金红绳款 手链甄品', money: '2343', img: require('../assets/home/home_mock1.png')},
                    {title: '3周大福十二生肖黄金红绳款 手链甄品', money: '2343', img: require('../assets/home/home_mock1.png')},
                    {title: '4周大福十二生肖黄金红绳款 手链甄品', money: '2343', img: require('../assets/home/home_mock1.png')},
                ]
            }
        },
        methods: {
            int: (val = '330.07') => {
                return val.substring(0, val.lastIndexOf('.') + 1)
            },
            dec: (val = '330.07') => {
                return val.substring(val.lastIndexOf('.') + 1)
            }
        }

    }
</script>
<style lang="less">
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
                    border-left: 3px solid #bc0203;
                    padding-left: 10px;
                    font-size: 32px;
                    color: #333;
                }

                .header-right {
                    color: #666;
                    font-size: 24px;
                }

                .productions {
                    flex: 2;
                    flex-direction: row;
                    flex-wrap: wrap;
                }

                .production-wrapper {
                    width: 50%;
                }

                .production {
                    margin-bottom: 20px;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 1);
                    border: 4px solid;
                    border-image: linear-gradient(-45deg, rgba(163, 93, 9, 1), rgba(251, 216, 173, 1), rgba(140, 78, 3, 1), rgba(251, 220, 179, 1)) 4 4;
                    border-radius: 8px 10px 10px 10px;

                    &.ml {
                        margin-left: 10px;
                    }

                    &.mr {
                        margin-right: 10px;
                    }

                    .content {
                        font-size: 14px;
                        text-align: left;
                        margin: 6px;
                        font-weight: 400;
                        height: 1rem;
                        line-height: 0.5rem;
                    }

                    .p-bottom {
                        font-size: 28px;
                        padding: 6px;
                        .money {
                            color: #FF204A;
                        }
                    }

                }

                .p-img {
                    height: 331px;
                }

                .shoppingCart img {
                    width: 50px;
                    height: 50px;
                }
            }
        }
    }
</style>
