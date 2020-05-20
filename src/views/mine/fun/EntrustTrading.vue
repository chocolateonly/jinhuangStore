<template>
    <Layout title="委托交易" :go-back="goBack">
        <div class="main" slot="content">
            <div class="flexRow0 jc-sb">
                <div>
                    <TitleCore/>
                    <span>稳健精选</span></div>
                <div class="rule" @click="goRule">委托交易规则</div>
            </div>

            <FlatListView :key="refreshing"  :getList="(page,pageSize)=>getList(page,pageSize)">
                <template scope="list">
                    <div v-for="(v,i) in list.data" :key="i" class="item flexRow0 jc-sb ai-center">
                        <img :src="v.icon" alt="">
                        <div class="text-line-1" style="width:60px"><span>{{v.name}}</span></div>

                        <div class="flexCol1">
                            <div  class=" text-line-1" style="text-align: center">周期</div>
                            <div class=" text-line-1"  style="text-align: center">{{v.cycle}}个月</div>
                        </div>

<!--确认-->
                        <div class="order-btn lg-bg" v-show="onShow(list.data)&&v.is_check==='1'" @click="()=>onConfirm(v)"></div>
<!--灰色-->
                        <div class="order-btn over" v-show="!onShow(list.data)&&v.is_check==='1'"></div>
<!--已选择-->
                        <div class="order-btn has" v-show="!onShow(list.data)&&v.is_check==='2'"></div>
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
    import _ from 'lodash'
    export default {
        name: "EntrustTrading",
        components: {FlatListView, TitleCore, Layout},
        data() {
            return {
                refreshing:false
            }
        },
        methods: {
            onShow(list){
               const data=list.find(item=>item.is_check==='2')
                //console.log(!_.isEmpty(data))
                return _.isEmpty(data)
            },
            goBack() {
                this.$router.go(-1)
            },
            goRule(){
                this.$router.push('/entrustTradingRule')
            },
            async onConfirm(item){
                const params={
                    hasToken:true,
                    id:item.id
                }

                try {
                    await  serviceApi.confirmEt(params)
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
                    const res=await  serviceApi.getEtList(params)
                    console.log(res.data.list.length,res.data.list)
                    return {total:res.data.list.length,list:res.data.list}
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
    .item{
        padding: 20px 0;
        border-bottom: 1px solid #eee;
        img{
            width:40px;
            height: 40px;
        }
    }
    .btn-wrap{
        width:150px
    }
    .order-btn {
        margin:0 10px;
/*        padding: 10px 20px;
        min-width: 100px;
        border-radius: 40px;
        text-align: center;*/

        &.has{
            background: url("../../../assets/me/wtjy_has_btn.jpg") no-repeat;
            background-size: cover;
            width:150px;
            height: 50px;
        }
        &.over{
            background: url("../../../assets/me/wtjy_over_btn.png") no-repeat;
            background-size: cover;
            width:150px;
            height: 50px;
        }
        &.lg-bg{
                background: url("../../../assets/me/wtjy_btn.jpg") no-repeat;
                background-size: cover;
                width:150px;
                height: 50px;
        }
    }


</style>
