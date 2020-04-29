<template>
    <div class="news flexGrow1">
        <img class="header-banner" src="../assets/news/news_banner.png" alt="">
        <Notice/>

        <div class="tabs flexRow0">
            <div class="tab-item ai-center" v-for="(v,i) in tabs" :key="i">
                {{v}}
            </div>

        </div>
    </div>
</template>
<script>
    import Notice from "../components/Notice";

    export default {
        name: 'News',
        components: {Notice},
        data() {
            return {
                tabs: ['公司新闻', '行业新闻']
            }
        }
    }
</script>
<style scoped>
    .news {
        background: url("../assets/common/_bg.png") no-repeat;
        background-size: cover;
    }

    .header-banner {
        height: 400px
    }

    .tabs {
        width: 508px;
        margin: 0 auto;
    }

    .tab-item {
        width: 254px;
        height: 32px;
        font-size: 32px;
        font-weight: bold;
        color: rgba(188, 2, 3, 1);
    }
</style>

