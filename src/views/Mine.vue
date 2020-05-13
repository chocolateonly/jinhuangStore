<template>
    <div class="bg flexCol1">
        <Header title="个人中心"
                _className="me-header header "
                :hasBorder="false"
                :hasLeftArrow="false"></Header>

        <div class=" flexCol1 overflowY">
            <div class="content">

                <div class="user-info flexRow0">
                    <div class="avatar" @click="goProfilePage">
                        <img v-if="data.image" :src="data.image" alt="">
                        <img v-else src="../assets/common/user_logo.png" alt="">
                    </div>
                    <div class="right-info flexGrow1">
                        <div class="flexRow1 jc-sb">
                            <div class="name" @click="goProfilePage">{{data.nickname}}</div>
                            <div class="right-btn">
                                <span class="user-btn" @click="goPage('/recharge')">充值</span>
                                <span class="user-btn"  @click="goPage('/getCash')">提现</span>
                            </div>
                        </div>
                        <div class="user-level flexRow0">
                            <!--todo:会员等级-->
                            <div v-if="data.mlname==='普通会员'" @click="goPage('/rechargeCenter')">开通会员</div>
                            <div v-else @click="goPage('/rechargeCenter')"><span>V</span>{{data.mlname}}</div>
                        </div>
                    </div>
                </div>

                <div class="user-money">
                    <div class="item-money text-line-1">
                        <label>资产总额：</label>
                        <span>{{all_money}}</span>
                    </div>
                    <div class="item-money text-line-1">
                        <span class="yue">(可用余额：{{data.balance}})</span>
                    </div>
                    <div class="item-money flexRow0 jc-sb ai-center" style="margin-top:10px">
                        <div class="flexGrow1  text-line-1">
                        <label>金    豆：</label>
                        <span>{{data.integral}}</span>
                            <span style="margin-left: 10px;color:#1a7ada" @click="goPage('/scoreDetails')">查看</span>
                        </div>
                        <div class="set-btn" @click="goPage('/setParams')">参数设置</div>
                    </div>
                </div>

                <div class="menu-box">
                    <div class="menu-header">
                        我的功能
                    </div>
                    <div class="menu-item flexRow0 ai-center">
                      <div class="item flexCol1"   v-for="(v,i) in fun" :key="i" @click="goFunPage(i)">
                          <div>
                              <img :src="v.img" alt="">
                          </div>
                          <div class="nav-name">{{v.nav}}</div>
                      </div>
                    </div>
                </div>

                <div class="menu-box">
                    <div class="menu-header">
                        我的订单
                    </div>
                    <div class="menu-item flexRow0 ai-center">
                        <div class="item flexCol1"   v-for="(v,i) in order" :key="i"
                        @click="()=>goOrderPage(i)">
                            <div>
                                <img :src="v.img" alt="">
                            </div>
                            <div class="nav-name">{{v.nav}}</div>
                        </div>
                    </div>
                </div>

                <div class="menu-box">
                    <div class="menu-header">
                        客户服务
                    </div>
                    <div class="menu-item flexRow0 ai-center">
                        <div class="item flexCol1"   v-for="(v,i) in service" :key="i"
                             @click="()=>goServicePage(i)">
                            <div>
                                <img :src="v.img" alt="">
                            </div>
                            <div class="nav-name">{{v.nav}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
  import Header from "../components/Header";
  import {serviceApi} from "../services/apis";
  import global from "../components/global";

  export default {
    name: "Mine",
    components: {Header},
    data() {
      return {
        fun:[
          {nav:'身份认证',img:require('../assets/me/fun1.png')},
          {nav:'分销中心',img:require('../assets/me/fun2.png')},
          {nav:'银行卡',img:require('../assets/me/fun3.png')},
          {nav:'委托交易',img:require('../assets/me/fun4.png')},
        ],
        order:[
          {nav:'全部订单',img:require('../assets/me/order1.png')},
          {nav:'待付款',img:require('../assets/me/order2.png')},
          {nav:'待收货',img:require('../assets/me/order3.png')},
          {nav:'待评价',img:require('../assets/me/order4.png')},
        ],
        service:[
          {nav:'意见反馈',img:require('../assets/me/service1.png')},
          {nav:'操作指南',img:require('../assets/me/service2.png')},
          {nav:'收货地址',img:require('../assets/me/service3.png')},
          {nav:'联系客服',img:require('../assets/me/service4.png')},
         ],
          data:{},
          all_money:'',
          lastPriceInterval:''
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      goProfilePage(){
        this.$router.push('/profile')
      },
      goOrderPage(i){
          if (i===2) return this.$router.replace(`/myOrder/${3}`)
        this.$router.push(`/myOrder/${i}`)
      },
      goServicePage(i){
        const that =this;
        switch (i){
            case 0:{
                that.$router.push(`/feedback`);
                break;
            }
            case 1: {
                that.$router.push(`/instructions`);
                break;
            }
            case 2: {
                that.$router.push(`/addressList/list`);
                break;
            }
          case 3: {
            that.$router.push(`/contact`);
            break;
          }
          default : {
            that.$router.push(`/addressList/list`)
          }
        }
      },
        goFunPage(i){
            const that =this;
            switch (i){
                case 0:{
                    that.$router.push(`/idCard`);
                    break;
                }
                case 1: {
                    that.$router.push(`/distributionCenter`);
                    break;
                }
                case 2: {
                    that.$router.push(`/bankCardList`);
                    break;
                }
                case 3: {
                    that.$router.push(`/entrustTrading`);
                    break;
                }
                default : {
                    that.$router.push(`/bankCardList`)
                }
            }

        },
        goPage(url){
            this.$router.push(url)
        }
    },
      async beforeCreate() {
          const params = {
              hasToken: true
          }

          try {
              const res = await serviceApi.profile(params)
              this.data=res.data

              //实时获取资产总额
              this.lastPriceInterval=setInterval(async ()=>{
                  try {
                      const all_money=await serviceApi.getAllMoney(params)
                      this.all_money=all_money.data
                  }catch (e) {
                      clearInterval(this.lastPriceInterval)
                      global.showErrorTip(e.msg, this)
                  }
              },1000)
          } catch (e) {
              global.showErrorTip(e.msg, this)
          }
      },
      destroyed() {
          clearInterval(this.lastPriceInterval)
      }
  }
</script>

<style lang="less" scoped>
    .bg {
        height: 100%;
        background: url("../assets/me/me_bg.png") no-repeat;
        background-size: cover;
    }

    #app .me-header {
        background: transparent;

        .van-nav-bar__title {
            color: #fff;
        }
    }

    .content {
        padding: 0.4rem;
        font-size: 0.4rem;

        .user-info {
            .avatar {
                width: 130px;
                height: 130px;
                margin-right: 10px;
                border-radius: 65px;
                background: #fcc;
                img {
                    width: 130px;
                    height: 130px;
                    border-radius: 65px;
                }
            }
            .name {
                color: #fff;
                font-size: 36px;
            }
            .user-btn {
                display: inline-block;
                width: 124px;
                height: 62px;
                line-height: 62px;
                background: url("../assets/me/btn_bg.png") no-repeat;
                background-size: cover;
                color: #C91415;
                font-size: 36px;
                margin-left: 10px;
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

        .user-money {
            margin: 20px 0;
            padding: 20px;
            background: #fff;
            text-align: left;
            border-radius: 10px;
            .item-money{
                span{
                    color: #C91415;
                    &.yue{
                        color: #999;
                    }
                }
                .set-btn{
                    background: linear-gradient(#F24949, #C40D0E);
                    color: #fff;
                    padding: 10px;
                    min-width: 140px;
                    text-align: center;
                }
            }
        }

        .menu-box{

            margin-bottom: 20px;
            padding: 20px;
            background: #fff;
            border-radius: 10px;
            .menu-header{
                padding-bottom: 20px;
                border-bottom: 1px solid #eee;
                font-size: 29px;
                color: #2e2e2e;
                text-align: left;
            }
            .menu-item{
                padding: 20px 0;
                img{
                    width: 72px;
                    height:72px;
                }
                .nav-name{
                    font-size: 24px;
                    color: #626262;
                }
            }
        }
    }
</style>
