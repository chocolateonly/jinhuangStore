<template>
    <div class="bg flexCol1">
        <div class="pl-header flexCol0">

            <Header title="详细信息" _className="header flexCol0 clearBorder" :on-press-left="goBack">
                <img class="header-right-icon" src="../../assets/common/icon_share.png" alt="">
            </Header>

        </div>
        <div class=" flexCol1 overflowY">

            <div>
                <Swiper :images="data.images"/>
            </div>

            <div class="content">

                <div class="title">
                    {{data.title}}
                </div>

                <div class="money-info flexRow0">
                    <div class="flexRow1 flexGrow1 ai-center text-line-1">
                        <div class="money">
                            <span>￥</span>
                            <span class="font50">{{int()}}</span>
                            <span>{{dec()}}</span>
                            <span class="jindou">金豆{{data.jindou}}</span>
                        </div>
                    </div>
                    <div class="yishou text-line-1">已售{{data.money}}件</div>
                </div>

<!--                <van-cell class="has-right-arrow" title="规格数量选择" is-link @click="setNumber"/>-->
                <van-cell class="has-right-arrow comment" is-link @click="goCommentPage">
                    <template #title>
                        <TitleCore/>
                        <span class="custom-title">宝贝评价</span>
                    </template>
                </van-cell>


                <div v-for="(v,i) in data.comment" :key="i">
                    <CommentItem :v="v" :i="i"/>
                </div>

                <!--产品详情-->
                <div>
                    <h4>产品详情</h4>

                    <img src="../../assets/home/home_mock1.png">

                </div>
            </div>
        </div>

        <!--规格选择-->
        <van-popup class="number-select-box" v-model="show" position="bottom" :style="{ height: '70%' }">
            <div class="content">

                <div class="number-header flexRow0 flexGrow1">

                    <div class="number-header-left">
                        <img src="../../assets/home/home_mock1.png" alt="">
                    </div>

                    <div class="number-header-right ">
                        <div class="number-header-title text-line-2">
                            {{data.title}}
                        </div>

                        <div class="number-header-money">
                            <div class="flexRow1 flexGrow1 ai-center text-line-1">
                                <div class="money">
                                    <span>￥</span>
                                    <span class="font50">{{int()}}</span>
                                    <span>{{dec()}}</span>

                                    <span class="jindou">金豆{{data.jindou}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class=" flexGrow1">

                    <div class="guige-select">
                        <div class="guige-title-wrap">
                            <div class="guige-select-title">
                                颜色
                            </div>
                        </div>

                        <div class="guige-select-content">
                        <span class="guige-select-tag" v-for="(v,i) in colorList" :key="i">
                            <van-tag v-if="selected_color===v.id" type="primary" color="#BC0203" @click="selectedColor(v)" size="large">{{v.name}}</van-tag>
                            <van-tag v-else plain type="primary" color="#323232" @click="selectedColor(v)" size="large">{{v.name}}</van-tag>
                        </span>
                        </div>
                    </div>

                    <div class="guige-select">
                        <div class="guige-title-wrap">
                            <div class="guige-select-title">
                                规格
                            </div>
                        </div>

                        <div class="guige-select-content">
                        <span class="guige-select-tag" v-for="(v,i) in guige" :key="i">
                            <van-tag v-if="selected_size===v.id" type="primary" color="#BC0203" @click="selectedSize(v)" size="large">{{v.name}}</van-tag>
                            <van-tag v-else plain type="primary" color="#323232" @click="selectedSize(v)" size="large">{{v.name}}</van-tag>
                        </span>
                        </div>
                    </div>


                    <div class="set-number flexRow0 jc-sb ai-center">
                        <div class="set-number-title">购买数量</div>
                        <div class="set-number-wrap">
                            <van-stepper v-model="buyNumber" min="1" max="8" />
                        </div>
                    </div>

                </div>

            </div>
        </van-popup>


        <!--底部购物车-->
        <van-goods-action v-if="show" class="jiagou  jc-sb" :style="show?'z-index:2020':''">

                <van-button style="flex:1;margin:0 20px;" round color="linear-gradient(to right,#ffd01e,#ee0a24)">确认</van-button>

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
                <van-goods-action-button type="warning" text="加入购物车" @click="showModal"/>
                <van-goods-action-button type="danger" text="立即购买" @click="placeOrder"/>
            </div>

        </van-goods-action>
    </div>
</template>

<script>
    import Header from "../../components/Header";
    import Swiper from "../../components/Swiper";
    import TitleCore from "../../components/TitleCore";
    import CommentItem from "./components/CommentItem";
    export default {
        name: "ProductionDetails",
        data() {
            return {
                show: false,
                //MOCK
                data: {
                    images: [
                        'https://img.yzcdn.cn/vant/apple-1.jpg',//
                        'https://img.yzcdn.cn/vant/apple-2.jpg',
                    ],
                    title: '周先生周先生周先生周先生周先生周先生周先生周先生周先生周先生周先生周先生周先生',
                    money: '989.00',
                    jindou: '2325',
                    yimai: '4877',
                    hasCollected: false,
                    comment: [
                        {
                            user: '小君',
                            content: '太棒了，产品很好 拷贝',
                            star: 4,
                            createdTime: '2019-4-23',
                        },
                        {
                            user: '小君',
                            content: '太棒了，产品很好 拷贝',
                            star: 4,
                            createdTime: '2019-4-23',
                        },
                    ],
                    details: {
                        img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
                    },
                },
                colorList: [
                    {id: '1', name: '柠檬黄'},
                    {id: '2', name: '天空蓝'},
                    {id: '3', name: '玫瑰红'},
                    {id: '4', name: '湖水绿'},
                    {id: '5', name: '芭比粉'},
                ],
                guige: [{id: '1', name: 'S'}, {id: '2', name: 'M'}, {id: '3', name: 'L'}, {id: '4', name: 'LX'}],
                selected_color: '',
                selected_size: '',
                buyNumber:1,
            }
        },
        components: {CommentItem, TitleCore, Swiper, Header},
        mounted() {
            this.selected_color = this.colorList[0].id
            this.selected_size = this.guige[0].id
        },
        methods: {
            int(val = '330.07') {
                return val.substring(0, val.lastIndexOf('.') + 1)
            },
            dec(val = '330.07') {
                return val.substring(val.lastIndexOf('.') + 1)
            },
            goBack() {
                this.$router.go(-1)
            },
            goCollect() {
                this.data.hasCollected = !this.data.hasCollected
            },
            goCommentPage() {
                this.$router.push('/comment')
            },
            setNumber() {

            },
            selectedColor(item){
                this.selected_color=item.id
            },
            selectedSize(item){
                this.selected_size=item.id
            },
            showModal(){
                this.show=!this.show
            },
            placeOrder(){
                this.$router.push('/payOrder')
            }
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
        .set-number{
            margin: 30px 0 20px 0;
            .set-number-title{
                color:#666
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
