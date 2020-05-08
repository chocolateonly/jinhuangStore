<template>
    <div class="swiper">
        <van-swipe :autoplay="3000" height="200" indicator-color="#ffffff">
            <van-swipe-item v-for="(v, index) in images" :key="index">
                <img v-lazy="v.image" class="img" @click="showImage(index)"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import {ImagePreview} from 'vant';
    export default {
        name: "Swiper",
        props: {
            images: Array
        },
        methods:{
            showImage(i){
                ImagePreview({
                    images:Object.values(this.images).map(item=>item.image),
                    startPosition: i,
                    onClose() {
                        // do something
                    },
                });
            }

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
