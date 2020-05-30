<template>
    <Layout title="佣金明细" :go-back="goBack">
        <div class="main" slot="content">
            <div class="team-header flexRow0 ">
                <div class="left-content flexCol1 ai-center">
                    <div>累计佣金</div>
                    <div class="num">{{data.commission_money}}</div>
                </div>
                <div class="left-content  flexCol1 ai-center">
                    <div>累计人数（人）</div>
                    <div class="num">{{data.commission_num}}</div>
                </div>
            </div>

            <van-tabs class="tabs flexGrow1"  v-model="selectedTab">
                <van-tab v-for="index in 2" :title="index+'级用户'" :key="index">
                </van-tab>
            </van-tabs>

            <div class=" flexGrow1">
                <FlatListView :key="selectedTab" :getList="(page,pageSize)=>getList(page,pageSize)">
                    <template scope="list">
                        <div class="user-info" v-for="(v,i) in list.data" :key="i">
                            <div class="flexRow0">
                                <div class="avatar">
                                    <img :src="v.avatar" alt="">
                                </div>

                                <div class="right-info flexGrow1 jc-sb">
                                    <div class="flexRow1 jc-sb">
                                        <div class="name">{{v.nickname}}</div>
                                        <div class="money">{{v.money}}</div>
                                    </div>


                                    <div class="user-tiem flexRow0">
                                        {{v.create_time}}
                                    </div>
                                </div>
                            </div>

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
  import {serviceApi} from "../../../services/apis";
  import global from "../../../components/global";

  export default {
    name: "MoneyDetails",
    components: {FlatListView, Layout},
    data() {
      return {
          data: {},
          selectedTab:0
      }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        async getList(page) {
            const params = {
                hasToken: true,
                page,
                sta:this.selectedTab+1
            }

            try {
                const res = await serviceApi.getCommissionDetail(params)
                this.data=res.data
                return {total:res.data.count,list:res.data.list,page:res.data.page}
            } catch (e) {
                global.showErrorTip(e.msg, this)
            }
        }
    }
  }
</script>

<style lang="less" scoped>
    .main {
        text-align: left;
    }
    .team-header {
        padding: 40px;
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
            font-size: 36px;
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
