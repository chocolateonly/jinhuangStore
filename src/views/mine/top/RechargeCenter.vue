<template>
    <Layout title="VIP" :go-back="goBack">
        <div class="main" slot="content">

            <div class="user-info flexRow0">
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

            <div class="title">选择VIP</div>


            <div class="vip-item" v-for="(v,i) in vipList" :key="i"
            :class="selected_vip===v.id?'active':''">
                <div class="flexRow1 jc-sb">
                    <span class="level">{{v.level}}</span>
                    <span class="scale">特惠价￥ <span>{{v.scale}}</span></span>
                </div>
                <div class="flexRow1 jc-sb">
                    <span class="shouxufei">交易收取手续费{{v.shouxufei}}元 赠送{{v.score}}积分</span>
                    <span class="money">￥{{v.money}}</span>
                </div>
            </div>

            <div class="save-btn lg-bg-red flexCol0 ai-center" @Click="onSubmit">
                <span>提交</span>
            </div>

        </div>
    </Layout>

</template>

<script>
  import Layout from "../../../components/Layout";

  export default {
    name: "RechargeCenter",
    components: {Layout},
    data() {
      return {
       user:{
           name:'zs',
           level:'等级VIP1',
           avatar: require('../../../assets/me/avatar.png'),
       },
          vipList:[
              {id:'1',level:'VIP 1',scale:'50000',money:'8000',shouxufei:270,score:30},
              {id:'2',level:'VIP 2',scale:'100000',money:'15000',shouxufei:230,score:30},
              {id:'3',level:'VIP 3',scale:'200000',money:'250000',shouxufei:230,score:30},
              {id:'4',level:'黄金会员',scale:'300000',money:'500000',shouxufei:130,score:30},
          ],
          selected_vip:''
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
        onSubmit(){

        }
    },
      mounted() {
        this.selected_vip=this.vipList[0].id
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
    .save-btn{

        padding: 24px 0;
        text-align: center;
        margin: 0 auto;
        margin-top: 100px;
    }
</style>
