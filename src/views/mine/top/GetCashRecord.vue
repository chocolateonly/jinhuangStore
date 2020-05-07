<template>
    <Layout title="提现记录" :go-back="goBack">
        <div class="main">
            <div class="main" slot="content">
                <FlatListView  :getList="(page,pageSize)=>getList(page,pageSize)">
                    <template scope="list">
                        <div v-for="(v,i) in list.data" :key="i">
                            <RecordItem  :v="v" :i="i" :handle-click="onSelected" />
                        </div>
                    </template>
                </FlatListView>

            </div>
        </div>
    </Layout>

</template>

<script>
  import Layout from "../../../components/Layout";
  import FlatListView from "../../../components/flatListView/FlatListView";
  import RecordItem from "./components/RecordItem";
  import {serviceApi} from "../../../services/apis";
  import global from "../../../components/global";

  export default {
    name: "GetCashRecord",
    components: {RecordItem, FlatListView, Layout},
    data() {
      return {

      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
        onSelected(){

        },
        async getList(page) {
            const params={
                hasToken:true,
                page
            }

            try {
                const res=await  serviceApi.getTixianList(params)
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

</style>
