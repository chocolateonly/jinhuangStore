<template>
    <Layout title="委托交易" :go-back="goBack">
        <div class="main" slot="content">
            <div class="flexRow0 jc-sb">
                <div>
                    <TitleCore/>
                    <span>稳健精选</span></div>
                <div class="rule" @click="goRule">委托交易规则</div>
            </div>

            <FlatListView  :getList="(page,pageSize)=>getList(page,pageSize)">
                <template scope="list">
                    <div v-for="(v,i) in list.data" :key="i">

                    </div>
                </template>
            </FlatListView>

        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";
    import TitleCore from "../../../components/TitleCore";
    import FlatListView from "../../../components/flatListView/FlatListView";
    import {serviceApi} from "../../../services/apis";
    import global from "../../../components/global";

    export default {
        name: "EntrustTrading",
        components: {FlatListView, TitleCore, Layout},
        data() {
            return {}
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            goRule(){
                this.$router.push('/entrustTradingRule')
            },
            async getList(page) {
                const params={
                    hasToken:true,
                    page
                }

                try {
                    const res=await  serviceApi.getEtList(params)
                    return {total:res.data.length,list:res.data.list}
                }catch (e) {
                    global.showErrorTip(e.msg,this)
                }
            },
        }
    }
</script>

<style lang="less" scoped>
    .main {
        text-align: left;
    }

    .rule {
        font-size: 24px;
        color: #999;
    }
</style>
