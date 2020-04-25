<template>
    <div id="app">
        <router-view/>
        <TabView />
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
    }
</style>
<script>

    import TabView from "./views/TabView";
    export default {
        components: {TabView}
    }
</script>
