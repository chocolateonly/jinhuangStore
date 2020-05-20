<template>
    <Layout title="银行卡" :go-back="goBack">
        <div class="header-right-btn" @click="goAddPage">添加</div>
        <div class="main" slot="content">

            <FlatListView :key="refreshing" :getList="getList">
                <template scope="list">
                    <div v-for="(v,i) in list.data" :key="i">
                        <BankCardItem :v="v" :i="i" :handleClick="deleteCard"/>
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
    import {serviceApi} from "../../../services/apis";
    import global from "../../../components/global";

    export default {
        name: "BankCardList",
        components: {BankCardItem, FlatListView, Layout},
        data() {
            return {
                refreshing:false
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            goAddPage(){
                this.$router.push('/addBankCard')
            },
            async deleteCard(v){
                try {
                    await serviceApi.deleteBankAccount({hasToken:true,id:v.id})
                    //this.$router.go(0)
                    this.refreshing=true
                    this.$nextTick(()=>{
                        this.refreshing=false
                    })
                }catch (e) {
                    global.showErrorTip(e.msg,this)
                }
            },
            async getList() {
                const params={
                    hasToken:true
                }

                try {
                    const res=await  serviceApi.getMyBanksList(params)
                    return {total:res.data.length,list:res.data}
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

    .header-right-btn {
        color: #fff;
    }
</style>
