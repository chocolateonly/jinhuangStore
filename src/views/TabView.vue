<template>
    <div class="tab-view flexCol1">
        <div class="flexCol1">
        <router-view/>
        </div>
        <div class="tab">
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
    .tab-view{
        height: 100%;
    }
</style>
