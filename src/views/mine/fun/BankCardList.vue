<template>
    <Layout title="银行卡" :go-back="goBack">
        <div class="header-right-btn" @click="goAddPage">添加</div>
        <div class="main" slot="content">

            <FlatListView :getList="getList">
                <template scope="list">
                    <div v-for="(v,i) in list.data" :key="i">
                        <BankCardItem :v="v" :i="i"/>
                    </div>
                </template>
            </FlatListView>

        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";
    import FlatListView from "../../../components/flatListView/FlatListView";
    import BankCardItem from "./commponents/BankCardItem";
    import {setList} from "../../../components/flatListView";

    export default {
        name: "BankCardList",
        components: {BankCardItem, FlatListView, Layout},
        data() {
            return {}
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            goAddPage(){
                this.$router.push('/addBankCard')
            },
            getList(page, pageSize) {
                return setList(page, pageSize, {
                    name: '中国工商银行',
                    type:'储蓄卡',
                    number: '**** **** **** 5697',
                    img: require('../../../assets/me/icon_gh.png')
                })
            }
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
