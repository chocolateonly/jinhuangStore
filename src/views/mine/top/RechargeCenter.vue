<template>
    <Layout title="VIP" :go-back="goBack">
        <div class="main" slot="content">

            <div class="user-info flexRow0">
                <div class="avatar">
                    <img v-if="data.avatar" :src="data.avatar" alt="">
                    <img v-else src="../../../assets/common/user_logo.png" alt="">
                </div>
                <div class="right-info flexGrow1">

                        <div class="name">{{data.nickname}}</div>

                    <div class="user-level flexRow0">
                        {{data.levelname}}
                    </div>
                </div>
            </div>

            <div class="title">选择VIP</div>


            <div class="vip-item" v-for="(v,i) in data.list" :key="i"
                 v-show="data.levelname!==v.name"
            :class="selected_vip.id===v.id?'active':''" @click="selected_vip=v">
                <div class="flexRow1 jc-sb">
                    <span class="level">{{v.name}}</span>
                    <span class="scale">特惠价￥ <span>{{v.money}}</span></span>
                </div>
                <div class="flexRow1 jc-sb">
                    <span class="shouxufei">交易收取手续费{{v.service_harge}}元 赠送{{v.integral}}积分</span>
                    <span class="money">￥{{v.money1}}</span>
                </div>
            </div>


            <div class="save-btn lg-bg-red flexCol0 ai-center" @click="onSubmit">
                <span>提交</span>
            </div>

        </div>
    </Layout>

</template>

<script>
  import Layout from "../../../components/Layout";
  import {serviceApi} from "../../../services/apis";
  import global from "../../../components/global";

  export default {
    name: "RechargeCenter",
    components: {Layout},
    data() {
      return {

          data:{},
          selected_vip:{},
          payWay: 0,
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
        async onPay() {
            const params = {
                hasToken: true,
                id:this.selected_vip.id
            }

            try {
                await serviceApi.setUpLevel(params)
                this.$toast('升级成功')
                this.$router.push('/tab/mine')

            } catch (e) {
                global.showErrorTip(e.msg, this)
            }
        },
        async onSubmit(){
            try {
                await this.onPay()

            }catch (e) {
                global.showErrorTip(e.msg, this)
            }
        },
    },
      async beforeCreate() {
          try {
              const res = await serviceApi.getVIPListData({hasToken: true})
              this.data = res.data
              this.selected_vip=res.data.list[0]
          } catch (e) {
              global.showErrorTip(e.msg, this)
          }
      }
  }
</script>

<style lang="less" scoped>
    .main {
        text-align: left;
    }
    .user-info {
        background: url("../../../assets/me/vip_bg.png") no-repeat;
        background-size: cover;
        padding: 20px;
        color: #fff;
        margin-bottom: 20px;
        .avatar {
            width: 100px;
            height: 100px;
            border-radius: 50px;
            background: #fcc;
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
    }
    .title{
        margin-bottom: 20px;
    }
    .vip-item{
        padding: 20px;
        margin-bottom: 20px;
        background: #fff;
        border-radius: 10px;
        border: 2px solid #ccc;
        .level{
            font-weight:400;
            color:rgba(34,34,34,1);
            font-size: 28px;
        }
        .scale{
            font-weight:400;
            color:rgba(255,91,53,1);
            font-size:22px;
            span{
                font-size: 26px;
            }
        }

        .shouxufei{
            color:rgba(161,161,161,1);
            font-size:22px;
        }
        .money{
            text-decoration:line-through;
            color:rgba(161,161,161,1);
            font-size:22px;
        }

        &.active{
            background: #fbe2e2;
            border: 0.02667rem solid #e33637;
        }
    }

    .pay-methods-list {
        text-align: left;
        margin-bottom: 80px;
        margin-top: 40px;

        img {
            width: 50px;
            height: 50px;
            display: block;
            margin-right: 20px;
        }

        .van-cell-group {
            background: transparent;
        }

        .pay-methods-item {
            background: transparent;
        }
    }
    .save-btn{
        padding: 24px 0;
        text-align: center;
        margin: 0 auto;
        margin-top: 100px;
    }
</style>
