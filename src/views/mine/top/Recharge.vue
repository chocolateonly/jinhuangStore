<template>
    <Layout title="充值余额" :go-back="goBack">
        <div class="header-right-btn" @click="goPage('/rechargeList')">
            充值记录
        </div>
        <div class="main flexGrow1" slot="content">

            <div class="yue lg-bg-red">
                <div class="title">钱包余额</div>
                <div class="money text-line-1">{{yue}}</div>
            </div>

            <div class="money-select-box">

                <div class="money-item-wrap">

                    <div class="money-item-m"
                         v-for="(v,i) in moneyList" :key="i"
                         :class="{'active':selected===v.money}"
                         @click="onSelected(v)"
                    >
                        <div class="money-text">{{v.money}}</div>
                    </div>

                    <div class="money-item-m" :class="{'active':sdyMoney}">
                        <div class="money-text">
                            <input v-model="sdyMoney" type="number"  placeholder="输入其他金额"  @input="val=>onChangeMoney(val)">
                        </div>
                    </div>

                </div>


                <!--                <div class="money-item flexRow1" style="flex:3" v-for="(v,i) in moneyList" :key="i">

                                     <van-tag class="flexCol1" v-if="selected===v.money" type="primary" color="#BC0203"
                                              @click="onSelected(v)" size="large">{{v.money}}</van-tag>

                                    <van-tag class="flexCol1" v-else plain  type="primary" color="#323232"
                                              @click="onSelected(v)" size="large">{{v.money}}</van-tag>

                                </div>

                                    <div class="zdy" style="border: 1px solid #fcc;">
                                        <van-field v-model="sdyMoney" type="number" label="自定义"
                                                   @input="val=>onChangeMoney(val)"
                                                   :placeholder="`自定义金额不低于${moneyList.length>0?moneyList[0].money:0}`"
                                                   label-align="left"
                                                   input-align="right" />
                                    </div>-->


                <van-radio-group class="pay-methods-list" v-model="payWay">
                    <van-cell-group>

                        <van-cell class="pay-methods-item"
                                  v-for="(v,i) in payMethods" :title="v.name" :key="i"
                                  clickable @click=" payWay = v.id">
                            <template #icon>
                                <img :src="v.img" alt="">
                            </template>
                            <template #right-icon>
                                <van-radio :name="v.id"
                                           checked-color="#BC0203"/>
                            </template>
                        </van-cell>

                    </van-cell-group>
                </van-radio-group>


                <PageBtn title="充 值" :on-click="onSubmit" />
            </div>

        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";
    import {apiRoot, getParams, serviceApi, payRedirectUrl} from "../../../services/apis";
    import global from "../../../components/global";
    import qs from "qs";
    import axios from 'axios'
    import PageBtn from "../../../components/PageBtn";

    export default {
        name: "Recharge",
        components: {PageBtn, Layout},
        data() {
            return {
                yue: '0',
                moneyList: [], //'1万元','3万元','5万元','10万元'
                selected: '',
                sdyMoney: '',

                payMethods: [
                    {id: 0, name: '微信支付', img: require('../../../assets/home/pay/icon_wx.png')},
                    {id: 1, name: '支付宝支付', img: require('../../../assets/home/pay/icon_zfb.png')},
                ],
                payWay: 0
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            onSelected(item) {
                this.selected = item.money
                this.sdyMoney = ''
            },
            onChangeMoney() {
                if (Number(this.sdyMoney) > 0) {
                    this.selected = ''
                } else {
                    this.sdyMoney = ''
                }
            },
            async onPay() {
                const params = {
                    hasToken: true,
                    money: this.sdyMoney ? this.sdyMoney : this.selected,
                    type: this.payWay + 1,
                }

                try {

                    let res = await axios.post(`${apiRoot}/api/index/recharge?${qs.stringify(getParams(params))}`)
                    if (res.data.code === '400') return global.showErrorTip(res.data.desc, this)

                    if (this.payWay === 0) {//微信
                        const url = encodeURIComponent(`${payRedirectUrl}/#/tab/mine`)
                        window.location.href = res.data.data + "&redirect_url=" + url;
                    } else if (this.payWay === 1) {//支付宝
                        const div = document.createElement('div');
                        div.innerHTML = res.data;
                        document.body.appendChild(div);
                        document.forms[0].submit();
                    } else {
                        this.$toast('充值成功') //支付成功
                        this.$router.push('/tab/mine')
                    }

                } catch (e) {
                    console.log(e)
                    global.showErrorTip(e.msg, this)
                }
            },
            async onSubmit() {
                try {
                    await this.onPay()

                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            },
            goPage(url) {
                this.$router.push(url)
            },

        },
        async beforeCreate() {
            const params = {
                hasToken: true
            }

            try {
                const res = await serviceApi.getRechargeData(params)
                this.yue = res.data.balance
                this.moneyList = res.data.list
                this.selected = res.data.list.length > 0 ? res.data.list[0].money : ''
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

    .header-right-btn {
        color: #fff;
    }

    .yue {
        padding: 30px;
        text-align: center;

        .money {
            font-size: 40px;
            font-weight: 400;
            margin-top: 10px;
        }
    }

    .money-select-box {
        margin-top: 20px;
    }

    .money-item {
        display: inline-block;
        margin-bottom: 20px;
        margin-right: 20px;

        span {
            padding: 30px 50px;
        }
    }

    .money-item.zdy {
        width: 100%;
        background: #fff;
        border-radius: 5px;
        border: 1px solid #ebedf0;
    }

    .save-btn {
        width: 610px;
        padding: 24px 0;
        text-align: center;
        margin: 0 auto;
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

    .money-item-wrap {
        display: flex;
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;

        .money-item-m {
            width: 33.33%;
            text-align: center;
            cursor: pointer;

            .money-text {
                margin: 10px;
                padding: 40px 0;
                border-radius: 25px;
                border: 2px solid #fcc;
                input{
                    border: none;
                    width: 96%;
                    text-align: center;
                    margin: 0 2%;
                    background: transparent;
                }
            }
            &.active .money-text{
                background: #BC0203;
                color: #fff;
            }
        }
    }


</style>
