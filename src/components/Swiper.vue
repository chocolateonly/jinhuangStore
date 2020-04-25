<template>
    <div class="swiper">
        <van-swipe :autoplay="3000" height="200">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" class="img"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
        props: {
            images: Array
        }
    }
</script>

<style scoped>
    .swiper {
        background: #fcc;

        overflow:hidden;
    }

    .img {
        width: 100%;
    }
</style>
