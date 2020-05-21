<template>
    <div class="bg flexCol1">

        <div class="pl-header ">
            <Header title="我的订单"
                    _className="header  clearBorder"
                    :hasBorder="false"
                    :on-press-left="goBack"></Header>

            <div class="tabs flexRow1  ai-center">
                <div class="tab-item flexRow1 jc-center"
                     v-for="(v,i) in tabs" :key="i"
                     v-show="v!=='待发货'"
                     :class="{'active':activeTab===i}"
                     @click="setActiveTab(i)">
                    {{v}}
                </div>
            </div>
        </div>

        <div class=" flexCol1 overflowY">
            <div class="content">
                <FlatListView :key="`${activeTab}_${refreshing}`" :getList="getList">
                    <template scope="list">
                        <div class="item" v-for="(v,i) in list.data" :key="i">
                            <MyOrderItem :v="v" :i="i" :cancelOrder="cancelOrder" :delOrder="delOrder" :goConfirm="goConfirm"/>
                        </div>
                    </template>
                </FlatListView>
            </div>
        </div>

    </div>

</template>

<script>
  import Header from "../../../components/Header";
  import FlatListView from "../../../components/flatListView/FlatListView";
  import MyOrderItem from "./components/MyOrderItem";
  import {serviceApi} from "../../../services/apis";
  import global from "../../../components/global";

  export default {
    name: "ShoppingCart",
    components: {MyOrderItem, FlatListView, Header},
    data() {
      return {
        tabs: ['全部', '待付款','待发货', '待收货', '待评价'],
        activeTab: 0,
          refreshing:false
      }
    },
    methods: {

      setActiveTab(i) {
        this.activeTab = i
        this.$router.replace(`/myOrder/${i}`)
      },
      goBack() {
          this.$router.push('/tab/mine')
      },
        async cancelOrder(v){

            const params = {
                hasToken: true,
                id:v.id,
            }

            try {
                await serviceApi.cancelOrder(params)
                //this.$router.go(0)
                this.refreshing=true
                this.$nextTick(()=>{
                    this.refreshing=false
                })
            } catch (e) {
                global.showErrorTip(e.msg, this)
            }
        },
        async delOrder(v){

            const params = {
                hasToken: true,
                id:v.id,
            }

            try {
                await serviceApi.delOrder(params)
                //this.$router.go(0)
                this.refreshing=true
                this.$nextTick(()=>{
                    this.refreshing=false
                })
            } catch (e) {
                global.showErrorTip(e.msg, this)
            }
        },
        async goConfirm(v){

            const params = {
                hasToken: true,
                id: v.id,
            }

            try {
                await serviceApi.confirmOrder(params)
                //this.$router.go(0)
                this.refreshing=true
                this.$nextTick(()=>{
                    this.refreshing=false
                })
            } catch (e) {
                global.showErrorTip(e.msg, this)
            }
        },
      async getList(page) {
       try {
           const params={
               hasToken:true,
               page:page,
               sta:this.activeTab
           }
           const res=await serviceApi.getMyOrderList(params)
           return {total:res.data.count,list:res.data.list}
       }catch (e) {
           global.showErrorTip(e.msg, this)
       }
      }
    },
    mounted(){
      this.activeTab = Number(this.$route.params.id)
    }
  }
</script>

<style lang="less" scoped>
    .bg {
        height: 100%;
        background: url("../../../assets/common/_bg.png") no-repeat;
        background-size: cover;
    }

    .pl-header {
        background: url("../../../assets/common/header_bg.png") no-repeat;
        background-size: cover;
    }

    .tabs {
        background: rgba(0, 0, 0, 0.1);
        padding: 10px 30px;

        .tab-item {
            font-size: 30px;
            color: #fff;
            text-align: center;
            position: relative;
            padding-bottom: 6px;

            &.active:after {
                content: '';
                width: 40px;
                border-bottom: 2px solid #fff;
                position: absolute;
                bottom: 0px;
            }
        }

    }

    .content {
        padding: 0.4rem;
        font-size: 0.4rem;
    }
</style>
