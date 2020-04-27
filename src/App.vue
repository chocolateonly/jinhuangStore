<template>
    <div id="app" class="flexCol1">
        <router-view/>
    </div>
</template>

<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width:100%;
        height: 100%;


        //全局样式
        //header 红底白字
        .header {
            height: 128px;
            background: transparent;

            .van-nav-bar__title {
                color: #fff;
                line-height: 128px;
            }

            .van-icon-arrow-left {
                color: #fff;
                font-size: 44px;
            }
        }
    }

</style>
<script>

    export default {
        components: {}
    }
</script>
