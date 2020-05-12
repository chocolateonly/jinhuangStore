<template>
    <div class="bg flexCol1">

        <Header title="订单支付" _className="header  clearBorder" :on-press-left="goBack"></Header>

        <div class=" flexCol1 overflowY">
            <div class="content">
                <div class="time-tip">支付剩余时间</div>

                <TimeCountDown :onFinish="onFinish"/>


                <div class="order-info flexRow0 " v-for="(v,i) in oplist" :key="i">
                    <div class="prod-img">
                        <img :src="v.image" alt="">
                    </div>

                    <div class="flexGrow1">
                        <div class="flexRow0 jc-sb">
                            <div class="order-title flexGrow1 text-line-1">
                                {{v.product_name}}
                            </div>

                            <div class="order-num">
                                x{{v.num}}
                            </div>
                        </div>
                        <div class="money">
                            <span>￥</span>
                            <span class="font50">{{int(v.price)}}</span>
                            <span>{{dec(v.price)}}</span>
                            <span class="jindou">金豆 {{v.integral}}</span>
                        </div>
                    </div>
                </div>

                <!--收货地址-->
                <div class="address-title">选择收货地址</div>
                <div class=" address-info flexRow0 ai-center" @click="$router.push('/addressList/select')">
                    <div class="address-img">
                        <img src="../../assets/common/order_d_dz.png" alt="">
                    </div>
                    <div class="flexGrow1">
                        <div class="flexRow0">
                            <div class="order-title  text-line-1">
                                {{address.name}} <span class="order-num">{{address.phone}}</span>
                            </div>
                        </div>
                        <div class="money">
                            {{address.address}}
                        </div>
                    </div>
                    <div class="arr-img">
                        <img src="../../assets/common/arrow_r.png" alt="">
                    </div>
                </div>

                <!-- 支付方式-->
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


                <FullButton title="确认支付" :onClick="onPay" _className="btn"/>

            </div>
        </div>

    </div>
</template>

<script>
    import Header from "../../components/Header";
    import TimeCountDown from "../../components/TimeCountDown";
    import FullButton from "../../components/FullButton";
    import {apiRoot, getParams, serviceApi, payRedirectUrl} from "../../services/apis";
    import global from "../../components/global";
    import qs from "qs";
    import {mapActions, mapGetters} from 'vuex'
    import _ from 'lodash'
    import axios from 'axios'

    export default {
        name: "PayOrder",
        components: {FullButton, TimeCountDown, Header},
        data() {
            return {
                payMethods: [
                    {id: 0, name: '微信支付', img: require('../../assets/home/pay/icon_wx.png')},
                    {id: 1, name: '支付宝支付', img: require('../../assets/home/pay/icon_zfb.png')},
                    {id: 2, name: '余额（0元）', img: require('../../assets/home/pay/icon_ye.png')},
                    {id: 3, name: '金豆（0）', img: require('../../assets/home/pay/icon_jindou.png')},
                ],
                payWay: 0,
                oplist: [],// 订单详情
                yue: '',
                jindou: '',
            }
        },
        methods: {
            ...mapActions(['selectAddress']),
            int(val = '0.00') {
                return val.substring(0, val.lastIndexOf('.') + 1)
            },
            dec(val = '0.00') {
                return val.substring(val.lastIndexOf('.') + 1)
            },
            goBack() {
                this.$router.go(-1)
            },
            onFinish() {
                this.$toast({message: '您已超时', forbidClick: true})
                setTimeout(() => {
                    this.$router.push('/myOrder/0')
                }, 1000)
            },
            async onPay() {
                const params = {
                    hasToken: true,
                    order_id: this.$route.params.orderId,
                    type: this.payWay + 1,
                    addr_id:this.address.id
                }

                try {
                    let res =  await axios.post(`${apiRoot}/api/index/surePay?${qs.stringify(getParams(params))}`)
                    if(res.data.code==='400') return  global.showErrorTip(res.data.desc, this)

                    if (this.payWay === 0) {//微信
                        const url = encodeURIComponent(`${payRedirectUrl}/#/myOrder/0`)
                        window.location.href = res.data.data + "&redirect_url=" + url;
                    } else if (this.payWay === 1) {//支付宝
                        const div = document.createElement('div');
                        div.innerHTML = res.data;
                        document.body.appendChild(div);
                        document.forms[0].submit();
                    } else {
                        this.$toast('支付成功') //支付成功
                        this.$router.replace('/myOrder/0')
                    }
                    this.selectAddress({})

                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            },
            async getOrderDetail() {

                const params = {
                    hasToken: true,
                    id: this.$route.params.orderId
                }

                try {
                    const res = await serviceApi.getOrderDetail(params)
                    this.oplist = res.data.oplist
                 if (_.isEmpty(this.address))  this.selectAddress(res.data.receivingAddrs)
                } catch (e) {
                    if (e.msg.includes('订单不存在')) this.$router.push('/myOrder/0')
                    global.showErrorTip(e.msg, this)
                }
            },
            async getProfile() {
                const params = {
                    hasToken: true
                }

                try {
                    const res = await serviceApi.profile(params)
                    this.yue = res.data.balance
                    this.jindou = res.data.integral
                    this.payMethods[2].name = `余额（${res.data.balance}元）`
                    this.payMethods[3].name = `金豆（${res.data.integral}）`
                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            }
        },
        computed:mapGetters(['address']),
        mounted() {
            this.getProfile()
            this.getOrderDetail()
        }
    }
</script>

<style lang="less" scoped>
    .bg {
        height: 100%;
        background: url("../../assets/common/_bg.png") no-repeat;
        background-size: cover;
    }

    .content {
        padding: 30px;
        font-size: 30px;
    }

    .time-tip {
        font-size: 22px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 40px;
        padding: 30px 0 20px 0;
    }

    .order-info {
        padding: 20px;
        margin: 20px 0;

        .prod-img {
            margin-right: 20px;
            width: 90px;
            height: 90px;
        }

        img {
            width: 90px;
            height: 90px;
            display: block;
        }
    }

    .order-title {
        font-weight: 400;
        color: rgba(33, 33, 33, 1);
        line-height: 41px;
        text-align: left;
    }

    .address-info {
        padding: 20px;

        .order-title {
            font-size: 30px;
        }

        .order-num {
            color: #666;
        }

        .money {
            color: #333;
        }
    }

    .address-title {
        text-align: left;
       padding-left: 20px;
        font-size: 20px;
        color: #999;
    }

    .money {
        margin-right: 10px;
        color: #FD2049;
        text-align: left;

        .jindou {
            color: #999;
            font-size: 24px;
            padding-left: 10px;
        }
    }

    .pay-methods-list {
        text-align: left;
        margin-bottom: 80px;

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

    .arr-img img {
        width: 20px;
        height: auto;
        margin-left: 10px;
    }

    .address-img img {
        width: 60px;
        height: auto;
        margin-right: 10px;
    }

    .btn {
        background: url("../../assets/common/sq_full_btn.png") no-repeat;
        background-size: cover;
    }
</style>
