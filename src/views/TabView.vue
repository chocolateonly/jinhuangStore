<template>
    <div class="tab-view flexCol1">
        <div class="flexCol1 overflowY">
        <router-view/>
        </div>
        <div class="tab flexCol0">
        <TabBar/>
        </div>
    </div>
</template>

<script>
  import TabBar from "../components/TabBar";

  export default {
    name: 'TabView',
    components: {TabBar}
  }
</script>

<style scoped>
    .tab{
        height: 300px;
    }
    .tab-view{
        height: 100%;
    }
</style>
