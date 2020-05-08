<template>
    <Layout title="分销中心" :go-back="goBack">
        <div class="main" slot="content">


            <div class="user-info">
                <div class="flexRow0">
                    <div class="avatar">
                        <img :src="user.avatar" alt="">
                    </div>

                    <div class="right-info flexGrow1">

                        <div class="name">{{user.nickname}}</div>

                        <div class="user-level flexRow0">
                           推荐人： {{user.pnickname}}
                        </div>
                    </div>
                </div>

                <div class="userinfo-footer flexRow0 jc-sb">
                    <div class="yongjin text-line-1">累计佣金：<span>{{user.commission_money}}</span></div>
                    <div class="renshu  text-line-1">累计人数：<span>{{user.commission_num}}</span></div>
                </div>

            </div>


            <div class="flexRow1">
                <div class="center-item flexCol1 ai-center" v-for="(v,i) in menu" :key="i" @click="goPage(i)">

                    <div>
                        <img :src="v.img" alt="">
                    </div>
                    <span>{{v.name}}</span>
                </div>

            </div>

        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";
    import {serviceApi} from "../../../services/apis";
    import global from "../../../components/global";

    export default {
        name: "DistributionCenter",
        components: {Layout},
        data() {
            return {
                menu:[
                    {name:'我的分销码',img:require('../../../assets/me/icon_qrcode.png')},
                    {name:'我的团队',img:require('../../../assets/me/icon_team.png')},
                    {name:'佣金明细',img:require('../../../assets/me/icon_money.png')},
                ],
                user: {},
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            goPage(i){
                const that=this
                switch (i) {
                    case 0:{
                        that.$router.push(`/myQrCode`);
                        break;
                    }
                    case 1: {
                        that.$router.push(`/distributionTeam`);
                        break;
                    }
                    case 2: {
                        that.$router.push(`/moneyDetails`);
                        break;
                    }
                    default : {
                        that.$router.push(`/bankCardList`)
                    }
                }
            }
        },
        async beforeCreate() {
            const params = {
                hasToken: true
            }

            try {
                const res = await serviceApi.getDistrCenterData(params)
                this.user=res.data
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
        background: url("../../../assets/common/header_bg.png") no-repeat;
        background-size: cover;
        border-radius: 20px;
        padding: 20px;
        color: #fff;

        .avatar {
            width: 100px;
            height: 100px;
            margin-right: 10px;
            background: #fcc;
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
    .userinfo-footer{
        padding-top: 30px;
        color: #fff;
        span{
            font-size: 30px;
        }
        .yongjin{
            margin-right: 20px;
        }
    }
    .center-item{
        margin-top: 50px;
        img{
            width: 80px;
            height: 80px;
        }
        span{
            font-size:28px;
            font-weight:400;
            color:rgba(35,35,35,1);
        }
    }
</style>
