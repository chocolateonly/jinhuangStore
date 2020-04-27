<template>
    <div class="home flexCol1">

        <img :src="require('./../assets/home/banner_header.png')" class="header-banner"/>

        <van-notice-bar left-icon="volume-o" mode="closeable" :scrollable="true">
            这里是商城平台公告通知
        </van-notice-bar>


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
    }

    .header-banner {
        height: 400px
    }
</style>
