<template>
    <Layout title="参数设置" :go-back="goBack">
        <div class="main">


        </div>
    </Layout>

</template>

<script>
  import Layout from "../../../components/Layout";

  export default {
    name: "SetParams",
    components: {Layout},
    data() {
      return {

      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style lang="less" scoped>
    .main {
        text-align: left;
    }

</style>
