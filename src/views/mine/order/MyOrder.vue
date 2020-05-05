<template>
    <div class="bg flexCol1">

        <div class="pl-header flexCol0">
            <Header title="我的订单"
                    _className="header flexCol0 clearBorder"
                    :hasBorder="false"
                    :on-press-left="goBack"></Header>

            <div class="tabs flexRow1  ai-center">
                <div class="tab-item flexRow1 jc-center"
                     v-for="(v,i) in tabs" :key="i"
                     :class="{'active':activeTab===i}"
                     @click="setActiveTab(i)">
                    {{v}}
                </div>
            </div>
        </div>

        <div class=" flexCol1 overflowY">
            <div class="content">
                <FlatListView :key="activeTab" :getList="getList">
                    <template scope="list">
                        <div class="item" v-for="(v,i) in list.data" :key="i">
                            <MyOrderItem :v="v" :i="i"/>
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
  import {setList} from "../../../components/flatListView";
  import MyOrderItem from "./components/MyOrderItem";

  export default {
    name: "ShoppingCart",
    components: {MyOrderItem, FlatListView, Header},
    data() {
      return {
        tabs: ['全部', '待付款', '待收货', '待评价'],
        activeTab: 0,
      }
    },
    methods: {

      setActiveTab(i) {
        this.activeTab = i
        this.$router.push(`/myOrder/${i}`)
      },
      goBack() {
        this.$router.go(-1)
      },
      getList(page, pageSize) {
        return setList(page, pageSize, {
          orderNum: '345345',
          name: '周大福十二生肖黄金红绳款 手链甄品',
          money: '2343',
          num: 1,
          img: require('../../../assets/home/home_mock1.png'),
          createTime: '2020-12-30 12:30'
        })
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
            font-size: 14px;
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
