<template>
    <div class="home flexCol1">

        <img :src="require('./../assets/home/banner_header.png')" class="header-banner"/>

        <van-notice-bar left-icon="volume-o" mode="closeable" :scrollable="true">
            这里是商城平台公告通知
        </van-notice-bar>

        <!--国内金价-->
        <div class="container">
            <div class="info flexCol1">

                <div class="flexRow1 jc-sb">
                    <div class="flexCol1 mr5">

                        <div class="gnjj text-line-1">国内金价</div>
                        <div class="top-left theme-color">
                            <span>￥</span>
                            <span class="font50">330.</span>
                            <span>07</span>
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
                            <span class="font50">330.</span>
                            <span>07</span>

                        </div>

                    </div>

                    <div class="flexCol0 sp"></div>

                    <div class="flexCol1 history-data">

                        <div class="gnjj text-line-1">历史交易量</div>
                        <div class="top-left color3 text-line-1">
                            <span>￥</span>
                            <span class="font50">330.</span>
                            <span>07</span>
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
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',//
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                ]
            }
        },

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
                height: 320px;
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

                .history-data {

                }
            }
        }
    }
</style>
