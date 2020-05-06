<template>
    <div class="bg flexCol1">
        <Header title="金条购置" _className="header flexCol0 clearBorder" :on-press-left="goBack"></Header>
        <div class=" flexCol1 overflowY">

            <img class="banner" src="../../assets/home/banner_header.png" alt="">

            <div class="content">
                <div class="gold-info">
                    <div class="gold-name">{{gold.name}}</div>

                    <div class="money">
                        <span>￥</span>
                        <span class="font50">{{int(curPrice)}}</span>
                        <span>{{dec(curPrice)}}</span>
                        <span class="jindou">实时金价</span>
                    </div>

                    <div class="guige-select">
                        <div class="guige-title-wrap">
                            <div class="guige-select-title">
                                规格
                            </div>
                        </div>

                        <div class="guige-select-content">
                        <span class="guige-select-tag" v-for="(v,i) in gold.gtlist" :key="i">
                            <van-tag v-if="selected_size===v.id" type="primary" color="#BC0203" @click="selectedSize(v)"
                                     size="large">{{v.weight}}</van-tag>
                            <van-tag v-else plain type="primary" color="#323232" @click="selectedSize(v)" size="large">{{v.weight}}</van-tag>
                        </span>
                        </div>
                    </div>

                    <div class="set-number flexRow0 jc-sb ai-center">
                        <div class="set-number-title">购买数量</div>
                        <div class="set-number-wrap">
                            <van-stepper v-model="buyNumber" min="1" max="8"/>
                        </div>
                    </div>

                    <div class="gold-item-info flexRow0 jc-sb ai-center">
                        <label class="text-line-1">预付款</label>
                        <div class="text-line-1">￥{{gold.total_m}}</div>
                    </div>

                    <div class="gold-item-info flexRow0 jc-sb ai-center">
                        <label class="text-line-1">服务费</label>
                        <div class="text-line-1">￥{{gold.service_harge}}</div>
                    </div>


                    <div class="gold-item-info flexRow0 jc-sb ai-center">
                        <label class="text-line-1">促销活动</label>
                        <div class="text-line-1" style="color:#FA5454">{{gold.activity}}</div>
                    </div>

                    <div class="gold-item-info flexRow0 jc-sb ai-center">
                        <label class="text-line-1">实付款</label>
                        <div class="text-line-1">{{gold.last_price}}</div>
                    </div>
                    <div class="gold-item-info flexRow0 jc-sb ai-center">
                        <label></label>
                        <div class="yue text-line-1" style="color:#999">(可用余额：{{gold.balance}})</div>
                    </div>
                </div>

                <div class="flexRow0">
                    <div class="btn flexCol1" style="margin-left: 0">
                        <div class="lg-bg-red">回购</div>
                    </div>
                    <div class="btn flexCol1" style="margin-right: 0">
                        <div class="lg-bg-red">预定</div>
                    </div>
                </div>

                <div class="other">
                    说明规则：很多很多字说明规则：很多很多字说明规则：很多很多字说明规则：很多很多字说明规则：很多很多字说明规则
                </div>

            </div>
        </div>

    </div>

</template>

<script>
    import Header from "../../components/Header";
    import {serviceApi} from "../../services/apis";
    import global from "../../components/global";

    export default {
        name: "GoldBuy",
        components: {Header},
        data() {
            return {
                gold: {
                    name: '锦煌金条',
                    money: '322.01',
                    size: [
                        {id: 0, size: '100g'},
                        {id: 1, size: '1000g'},
                        {id: 2, size: '3000g'},
                        {id: 3, size: '5000g'},
                    ],
                    number: 1,
                    total_m: '2020.22',
                    service_m: '270.22',
                    activity: '返还金豆30个',
                    fin_m: '3442.225',
                    yue: '354561.22'
                },
                selected_size: '',
                buyNumber: 1,
                curPrice:''
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            int(val = '330.07') {
                return val.substring(0, val.lastIndexOf('.') + 1)
            },
            dec(val = '330.07') {
                return val.substring(val.lastIndexOf('.') + 1)
            },
            selectedSize(item) {
                this.selected_size = item.id
            },
            async getGoldDetails(){
                const params={
                    hasToken:true
                }
                try {
                    const res=await  serviceApi.getGoldGoods(params)
                    this.selected_size=res.data.gtlist[0].id
                    this.gold=res.data
                }catch (e) {
                    global.showErrorTip(e.msg,this)
                }
            },
            async getLastPrice(){
                try {
                    //实时获取金价
                    this.lastPriceInterval = setInterval(async () => {
                        try {
                            const l_res = await serviceApi.getLastPrice()
                            this.curPrice = l_res.data.last_price
                        } catch (e) {
                            clearInterval(this.lastPriceInterval)
                            global.showErrorTip(e.msg, this)
                        }
                    }, 1000)
                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            }
        },
        async mounted() {
           this.getGoldDetails()

           this.getLastPrice()
        },
        destroyed() {
            clearInterval(this.lastPriceInterval)
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
        padding: 0.4rem;
        font-size: 0.4rem;
    }

    .banner {
        height: 344px;
    }

    .gold-name {
        text-align: left;
        font-weight: bold;
    }

    /*money*/
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

    /*select*/
    .guige-select {
        .guige-title-wrap {
            display: flex;
            flex-direction: row;
            flex: 1;

            .guige-select-title {
                flex: 1;
                text-align: left;
                // color: #666;
                font-size: 30px;
                padding: 30px 0 20px 0;
            }
        }

        .guige-select-content {
            display: flex;
            flex-wrap: wrap;

            .guige-select-tag {
                display: inline-block;
                margin-right: 20px;
                margin-bottom: 20px;

                span {
                    font-size: 30px;
                }
            }

        }

        /*number*/

        .set-number {
            margin: 30px 0 20px 0;

            .set-number-title {
                color: #666
            }
        }


    }
    .gold-item-info {
        margin: 12px 0;
        div{
            flex-grow: 1;
            text-align: right;
            margin-left: 20px;
        }
    }
    .btn{
        margin: 20px;
        div{
            padding: 16px;
        }
    }
    .other{
        font-size: 20px;
        color: #999;
        text-align: left;
    }
</style>
