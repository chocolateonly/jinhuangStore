<template>
    <Layout title="操作指南" :go-back="goBack">
        <div class="main" slot="content">
            <div v-html="data"></div>
        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";
    import {serviceApi} from "../../../services/apis";
    import global from "../../../components/global";

    export default {
        name: "Instructions",
        components: {Layout},
        data() {
            return {
                data: {}
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
        },
        async beforeCreate() {
            try {
                const res = await serviceApi.getActionDetail({hasToken: true})
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
