<template>
    <Layout title="银行卡" :go-back="goBack">
        <div class="header-right-btn">添加</div>
        <div class="main" slot="content">



        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";

    export default {
        name: "BankCardList",
        components: {Layout},
        data() {
            return {}
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

    .header-right-btn {
        color: #fff;
    }
</style>
