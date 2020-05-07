<template>
    <Layout title="委托交易规则" :go-back="goBack">
        <div class="main" slot="content">

<p>
    1、投资1-5万1%利息，利息直接到余额； 2、投资5-10万1.1%利息，利息直接到余额； 3、投资10万以上1.2%利息，
</p>
        </div>
    </Layout>

</template>

<script>
  import Layout from "../../../components/Layout";

  export default {
    name: "EntrustTradingRule",
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
