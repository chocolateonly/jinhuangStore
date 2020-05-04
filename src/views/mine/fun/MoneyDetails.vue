<template>
    <Layout title="佣金明细" :go-back="goBack">
        <div class="main" slot="content">
            <div class="team-header flexRow0 ">
                <div class="left-content flexCol1 ai-center">
                    <div>累计佣金</div>
                    <div>4012.00</div>
                </div>
                <div class="left-content  flexCol1 ai-center">
                    <div>累计人数（人）</div>
                    <div>3660</div>
                </div>
            </div>

            <van-tabs class="tabs flexGrow1">
                <van-tab v-for="index in 8" :title="index+'级用户'" :key="index">
                </van-tab>
            </van-tabs>

            <div class=" flexGrow1">
                <FlatListView :getList="(page,pageSize)=>getList(page,pageSize)">
                    <template scope="list">
                        <div class="user-info" v-for="(v,i) in list.data" :key="i">
                            <div class="flexRow0">
                                <div class="avatar">
                                    <img :src="v.avatar" alt="">
                                </div>

                                <div class="right-info flexGrow1 jc-sb">
                                    <div class="flexRow1 jc-sb">
                                        <div class="name">{{v.name}}</div>
                                        <div class="money">{{v.yongjin}}</div>
                                    </div>


                                    <div class="user-tiem flexRow0">
                                        {{v.createTime}}
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
  import {setList} from "../../../components/flatListView";
  import FlatListView from "../../../components/flatListView/FlatListView";

  export default {
    name: "MoneyDetails",
    components: {FlatListView, Layout},
    data() {
      return {

      }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        getList(page, pageSize) {
            return setList(page, pageSize, {
                name: 'zs',
                avatar: require('../../../assets/me/avatar.png'),
                yongjin:'200',
                createTime: '2020-12-30 12:30'
            })
        }
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
</style>
