<template>
    <Layout title="联系客服" :go-back="goBack">
        <div class="main" slot="content">

            <img class="banner" src="../../../assets/me/contact_banner.png" alt="">


            <div class="user-info">
                <div class="flexRow1 jc-sb ai-center">

                    <div class="flexRow1">
                    <div class="avatar">
                        <img src="../../../assets/me/icon_service.png" alt="">
                    </div>

                    <div class="right-info flexGrow1">

                        <div class="name">24小时全国服务热线</div>

                        <div class="user-level flexRow0">
                            800-222-2222
                        </div>
                    </div>
                </div>

<!--                    <div class="right-arrow flexRow0">
                        <van-icon name="arrow" size="40"/>
                    </div>-->

                </div>

            </div>

        </div>
    </Layout>

</template>

<script>
  import Layout from "../../../components/Layout";

  export default {
    name: "Contact",
    components: {Layout},
    data() {
      return {

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
    .banner{
        width: 100%;
    }
    .user-info {
        margin-top: 20px;
        background: url("../../../assets/common/header_bg.png") no-repeat;
        background-size: cover;
        border-radius: 20px;
        padding: 20px;
        color: #fff;
        opacity: 0.8;

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
    .right-arrow{
        margin-right: 20px;
    }
</style>
