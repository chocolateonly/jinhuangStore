<template>
    <Layout title="分销中心" :go-back="goBack">
        <div class="main" slot="content">


            <div class="user-info">
                <div class="flexRow0">
                    <div class="avatar">
                        <img :src="user.avatar" alt="">
                    </div>

                    <div class="right-info flexGrow1">

                        <div class="name">{{user.name}}</div>

                        <div class="user-level flexRow0">
                            {{user.level}}
                        </div>
                    </div>
                </div>

                <div class="flexRow0">
<!--todo:-->
                </div>

            </div>



        </div>
    </Layout>

</template>

<script>
  import Layout from "../../../components/Layout";

  export default {
    name: "DistributionCenter",
    components: {Layout},
    data() {
      return {
          user:{
              name:'zs',
              level:'等级VIP1',
              avatar: require('../../../assets/me/avatar.png'),
          },
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style lang="less" scoped>
    .main {
        text-align: left;
    }
    .user-info {
        background: url("../../../assets/common/header_bg.png") no-repeat;
        background-size: cover;
        border-radius: 20px;
        padding: 20px;
        color: #fff;
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
        .user-level {
            div {
                padding: 10px 20px;
                background: #fff;
                border-radius: 20px;
                color: #C91415;
                span {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    margin-right: 10px;
                    background: #C91415;
                    color: #fff;
                    border-radius: 20px;
                }
            }
        }
    }
</style>
