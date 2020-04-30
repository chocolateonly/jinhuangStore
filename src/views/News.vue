<template>
    <div class="news flexCol1 flexGrow1">

        <div class="flexCol0">
        <img class="header-banner" src="../assets/news/news_banner.png" alt="">
        <Notice/>
        </div>

        <div class="tabs flexRow0">
            <div class="tab-item flexCol1 ai-center"
                 v-for="(v,i) in tabs" :key="i"
                 :class="{'active':activeTab===i}"
                 @click="activeTab=i"
            >
                <div class="tab-item-title">{{v}}</div>
            </div>
        </div>

        <!-- 新闻列表-->
        <div class="news-list flexGrow1 overflowY">


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
                tabs: ['公司新闻', '行业新闻'],
                activeTab: 0
            }
        }
    }
</script>
<style lang="less" scoped>
    .news {
        background: url("../assets/common/_bg.png") no-repeat;
        background-size: cover;
    }

    .header-banner {
        height: 400px
    }

    .tabs {
        width: 508px;
        margin: 10px auto;
    }

    .tab-item {
        width: 254px;
        height: 32px;
        font-size: 30px;
        font-weight: 400;
        color: rgba(78, 78, 78, 1);

        &.active {
            color: rgba(188, 2, 3, 1);
        }

        &.active:after {
            content: '';
            width: 59px;
            height: 6px;
            background: rgba(188, 2, 3, 1);
            border-radius: 2px;
            margin-top: 5px;
        }
    }

    .news-list{
        margin: 0 30px;
    }
</style>

