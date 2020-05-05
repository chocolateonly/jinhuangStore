<template>
    <div class="bg flexCol1">
        <div class="pl-header flexCol0">

            <Header title="详细信息" _className="header flexCol0 clearBorder" :on-press-left="goBack">
                <!--                <img class="header-right-icon" @click="showShare = true" src="../../assets/common/icon_share.png"-->
                <!--                     alt="">-->
            </Header>

        </div>
        <div class=" flexCol1 overflowY">

            <div>
                <Swiper :images="data.imglist"/>
            </div>

            <div class="content">

                <div class="title">
                    {{data.name}}
                </div>

                <div class="money-info flexRow0">
                    <div class="flexRow1 flexGrow1 ai-center text-line-1">
                        <div class="money">
                            <span>￥</span>
                            <span class="font50">{{int(data.price)}}</span>
                            <span>{{dec(data.price)}}</span>
                            <span class="jindou">金豆{{data.integral}}</span>
                        </div>
                    </div>
                    <div class="yishou text-line-1">已售{{data.sale_num}}件</div>
                </div>

                <!--                <van-cell class="has-right-arrow" title="规格数量选择" is-link @click="setNumber"/>-->
                <van-cell class="has-right-arrow comment" is-link @click="goCommentPage">
                    <template #title>
                        <TitleCore/>
                        <span class="custom-title">宝贝评价</span>
                    </template>
                </van-cell>


                <div v-for="(v,i) in data.comlist" :key="i">
                    <CommentItem :v="v" :i="i"/>
                </div>

                <!--产品详情-->
                <div>
                    <h4>产品详情</h4>
                    <p>{{data.describe}}</p>
                    <img v-for="(item,i) in data.imglist" :key="i" :src="item.image"
                         style="width:100%">

                </div>
            </div>
        </div>

        <!--底部购物车-->
        <van-goods-action v-if="show" class="jiagou  jc-sb" :style="show?'z-index:2020':''">

            <van-button style="flex:1;margin:0 20px;" round color="linear-gradient(to right,#ffd01e,#ee0a24)"
                        @click="handleAddOrPay">确认
            </van-button>

        </van-goods-action>

        <van-goods-action class="jiagou  jc-sb" v-else>

            <div class="left-btn">
                <van-goods-action-icon class="collect"
                                       @click="goCollect"
                                       :icon="data.hasCollected?'star':'star-o'"
                                       :text="data.hasCollected?'已收藏':'收藏'"
                                       :color="data.hasCollected?'#ff5000':'#666'"/>
            </div>

            <div class="right-btn ">
                <van-goods-action-button type="warning" text="加入购物车" @click="addShoppingCart"/>
                <van-goods-action-button type="danger" text="立即购买" @click="placeOrder"/>
            </div>

        </van-goods-action>

        <!--规格选择-->
        <van-popup class="number-select-box" v-model="show" position="bottom" :style="{ height: '70%' }">
            <div class="content">

                <div class="number-header flexRow0 flexGrow1">

                    <div class="number-header-left">
                        <img :src="specs.image" alt="">
                    </div>

                    <div class="number-header-right ">
                        <div class="number-header-title text-line-2">
                            {{specs.name}}
                        </div>

                        <div class="number-header-money">
                            <div class="flexRow1 flexGrow1 ai-center text-line-1">
                                <div class="money">
                                    <span>￥</span>
                                    <span class="font50">{{int(specs.price)}}</span>
                                    <span>{{dec(specs.price)}}</span>

                                    <span class="jindou">金豆{{specs.integral}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=" flexGrow1">


                    <div class="guige-select" v-for="(spec,index) in specs.pslist" :key="index">
                        <div class="guige-title-wrap">
                            <div class="guige-select-title">
                                {{spec.name}}
                            </div>
                        </div>

                        <div class="guige-select-content">
                        <span class="guige-select-tag" v-for="(v,i) in spec.list" :key="i">
                            <van-tag v-if="selected[spec.id]===v.id" type="primary" color="#BC0203"
                                     @click="setSpecs(spec.id,v.id)" size="large">{{v.name}}</van-tag>
                            <van-tag v-else plain type="primary" color="#323232" @click="setSpecs(spec.id,v.id)"
                                     size="large">{{v.name}}</van-tag>
                        </span>
                        </div>
                    </div>

                    <div class="set-number flexRow0 jc-sb ai-center">
                        <div class="set-number-title">购买数量</div>
                        <div class="set-number-wrap">
                            <van-stepper v-model="buyNumber" min="1" max="8"/>
                        </div>
                    </div>

                </div>

            </div>
        </van-popup>

        <!--        <van-share-sheet
                        v-model="showShare"
                        title="分享"
                        :options="options"
                        @select="onSelect"
                />-->
    </div>
</template>

<script>
    import Header from "../../components/Header";
    import Swiper from "../../components/Swiper";
    import TitleCore from "../../components/TitleCore";
    import CommentItem from "./components/CommentItem";
    import global from "../../components/global";
    import {serviceApi} from "../../services/apis";

    export default {
        name: "ProductionDetails",
        data() {
            return {
                show: false,//购物车
                showShare: false,
                options: [
                    {name: '微信', icon: 'wechat'},
                    {name: 'QQ', icon: 'qq'},
                    {name: '复制链接', icon: 'link'},
                ],
                specs: [],//规格列表
                buyNumber: 1,
                data: {},
                selected: {},
                goCarOrPay: ''
            }
        },
        components: {CommentItem, TitleCore, Swiper, Header},

        methods: {
            int(val = '0.00') {
                return val.substring(0, val.lastIndexOf('.') + 1)
            },
            dec(val = '0.00') {
                return val.substring(val.lastIndexOf('.') + 1)
            },
            goBack() {
                this.$router.go(-1)
            },
            goCollect() {
                this.data.hasCollected = !this.data.hasCollected
            },
            goCommentPage() {
                this.$router.push(`/comment/${this.$route.params.id}`)
            },
            // shareToQQ() {
            //   //fixme:此处分享链接内无法携带图片
            //   const share = {
            //     title: "东金秀财",
            //     desc: "描述",
            //     share_url: "https://xiucai.neafex.com/#/"
            //   };
            //   location.replace(
            //     "https://connect.qq.com/widget/shareqq/index.html?url=" +
            //     encodeURIComponent(share.share_url) +
            //     "&title=" +
            //     share.title +
            //     "&desc=" +
            //     share.desc
            //   );
            // },
            // onSelect(option) {
            //    //分享
            //   console.log(option.name)
            //   this.shareToQQ()
            //
            // },
            setSpecs(listId, specId) {
                this.selected[listId] = specId
            },
            async handleAddOrPay() {//确认
                if (Object.values(this.selected).includes('')) return this.$toast('请选择规格属性')
                try {
                    //获取产品价格spa_id
                    const compose = Object.entries(this.selected).map((item) => item.join(':')).join(',')
                    const res = await serviceApi.getPriceBySpecs({
                        id: this.$route.params.id,
                        compose
                    })
                    const params = {
                        hasToken: true,
                        spa_id: res.data.spa_id,
                        id: this.$route.params.id,
                        num: this.buyNumber
                    }
                    if (this.goCarOrPay === 0) {//加入购物车
                        await serviceApi.addShoppingCart(params)
                        this.$toast('已加入购物车')
                    } else {//去支付
                        await serviceApi.buyNow(params)
                        this.$router.push('/payOrder')
                    }

                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }


            },
            async openToSetProductSpecs() {
                try {
                    //获取产品规格
                    const res = await serviceApi.getProductSpecs({id: this.$route.params.id})
                    this.specs = res.data
                    this.selected = Object.values(res.data.pslist).reduce((acc, cur) => {
                        acc[cur.id] = ''
                        return acc
                    }, {})
                    this.show = true

                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            },
            async addShoppingCart() {
                this.goCarOrPay = 0;
                await this.openToSetProductSpecs()
            },
            async placeOrder() {
                this.goCarOrPay = 1;
                await this.openToSetProductSpecs()
            }
        },
        async mounted() {
            try {
                const res = await serviceApi.getProductDetails({id: this.$route.params.id})
                this.data = res.data
            } catch (e) {
                global.showErrorTip(e.msg,this)
            }

        },
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

        .title {
            text-align: left;
            font-weight: 400;
            margin-bottom: 40px;
        }

        .money-info {
            border-bottom: 1px solid #eee;
            padding-bottom: 20px;
        }

        .money {
            margin-right: 10px;
            color: #FD2049;
        }

        .jindou {
            color: #999;
            font-size: 24px;
            padding-left: 10px;
        }

        .yishou {
            align-self: center;
            font-size: 14px;
            color: #666;
        }

        .has-right-arrow {
            text-align: left;
            background: transparent;
            padding: 10px 0;

            &:after {
                border: none
            }
        }

        .comment {
            border-bottom: 1px solid #eee;
        }

    }

    .number-select-box {
        background: url("../../assets/common/_bg.png") no-repeat;
        background-size: cover;
        padding-bottom: 90px;

        .number-header {
            .number-header-left {
                width: 200px;
                height: 200px;
                margin-right: 20px;
            }

            .number-header-title {
                text-align: left;
            }

            img {
                width: 200px;
                height: 200px;
            }

            .number-header-right {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex: 1;
            }
        }

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

            .set-number {
                margin: 30px 0 20px 0;

                .set-number-title {
                    color: #666
                }
            }

        }
    }

    .jiagou {
        width: 100%;
        background: url("../../assets/common/_bg.png") no-repeat;
        background-size: cover;
        box-shadow: 0px 0px 14px 4px rgba(115, 115, 115, 0.1);
        display: flex;
        flex: 4;

        .left-btn {
            flex: 2;
            justify-content: flex-start;
            display: flex;

            .collect {
                background: transparent;
            }
        }

        .right-btn {
            display: flex;
            flex-direction: row;
            flex: 2;
        }
    }
</style>
