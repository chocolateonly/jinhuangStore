<template>
    <Layout title="委托交易规则" :go-back="goBack">
        <div class="main" slot="content">

            <p v-html="data.gold_deal">
            </p>
        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";
    import {serviceApi} from "../../../services/apis";
    import global from "../../../components/global";

    export default {
        name: "EntrustTradingRule",
        components: {Layout},
        data() {
            return {
                data:{}
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },

        },
        async beforeMount() {
            try {
                const res = await serviceApi.getEtList({hasToken: true})
                this.data = res.data
            } catch (e) {
                global.showErrorTip(e.msg, this)
            }
        }
    }
</script>

<style lang="less" scoped>
    .main {
        text-align: left;
    }

</style>
