<template>
    <div>
        <router-view/>
        <TabBar/>
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

</style>
