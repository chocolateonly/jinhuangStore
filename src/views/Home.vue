<template>
    <div class="home">
        <Swiper :images="images"/>


    </div>
</template>

<script>
    import Swiper from "../components/Swiper";

    export default {
        name: 'Home',
        data() {
            return {
                images:[
                    'https://img.yzcdn.cn/vant/apple-1.jpg',//
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                ]
            }
        },
        components: {
            Swiper,
        }
    }
</script>
