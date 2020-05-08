<template>
    <Layout title="积分明细" :go-back="goBack">
        <div class="main" slot="content">
            <div class="main" slot="content">
                <div class="team-header flexRow0 ">
                    <div class="left-content flexCol1 ai-center">
                        <div>累计积分</div>
                        <div class="num">{{data.total_integral}}</div>
                    </div>
                    <div class="left-content  flexCol1 ai-center">
                        <div>可用积分</div>
                        <div class="num">{{data.may_integral}}</div>
                    </div>
                </div>

                <div class=" flexGrow1">
                    <FlatListView :getList="(page,pageSize)=>getList(page,pageSize)">
                        <template scope="list">
                            <div class="user-info" v-for="(v,i) in list.data" :key="i">
                                <div class="flexRow0">

                                    <div class="right-info flexGrow1 jc-sb">
                                        <div class="flexRow1 jc-sb">
                                            <div class="name">{{v.remark}}</div>
                                            <div class="money">{{v.integral}}</div>
                                        </div>

                                        <div class="user-tiem ">
                                            <div>订单类型：{{v.type}}</div>
                                            <div >{{v.create_time}}</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </template>
                    </FlatListView>
                </div>


            </div>

        </div>
    </Layout>

</template>

<script>
  import Layout from "../../../components/Layout";
  import FlatListView from "../../../components/flatListView/FlatListView";
  import {serviceApi} from "../../../services/apis";
  import global from "../../../components/global";

  export default {
    name: "ScoreDetails",
    components: {FlatListView, Layout},
    data() {
      return {
data:{}
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
        async getList(page) {
            const params={
                hasToken:true,
                page:page
            }

            try {
                const res=await  serviceApi.getIntegralDetail(params)
                this.data=res.data
                return {total:res.data.count,list:res.data.list}
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
    .team-header {
        padding: 30px;
        background: url("../../../assets/common/header_bg.png") no-repeat;
        background-size: cover;
        border-radius: 10px;
        color: #fff;
    }
    .tabs {
        margin-top: 30px;
        background: transparent;
    }

    .van-tabs__nav {
        background: transparent;
    }

    .user-info {

        padding: 20px;
        color: #333;
        border-bottom: 1px solid #eee;

        .avatar {
            width: 100px;
            height: 100px;
            margin-right: 10px;

            img {
                width: 100px;
                height: 100px;
                border-radius: 50px;
            }
        }

        .name {
            font-size: 30px;
        }

        .user-tiem {
            color: #999;
        }

        .right-info {
            display: flex;
            flex-direction: column;
        }
    }
    .money{
        font-size:40px;
        font-weight:400;
        color:rgba(255,190,49,1);
    }
    .num{
        font-size: 40px;
        font-weight: 400;
        padding: 20px 0;
    }
</style>
