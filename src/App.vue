<template>
    <div id="app">
        <Header />
        <van-button type="default">默认按钮</van-button>
        <van-button plain  type="primary">细边框按钮</van-button>
        <van-button loading type="info" loading-text="加载中..." />
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

        #nav {
            padding: 30px;
        }

        #nav a {
            font-weight: bold;
            color: #2c3e50;
        }

        #nav a.router-link-exact-active {
            color: #42b983;
        }
    }


</style>
<script>
    import Header from "./components/Header";
    export default {
        components: {Header}
    }
</script>
