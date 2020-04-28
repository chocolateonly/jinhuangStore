<template>
    <div class="product-list flexCol1">
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
                        </div>
                        <div class="jindou">金豆{{data.jindou}}</div>
                    </div>
                    <div class="yishou text-line-1">已售{{data.money}}件</div>
                </div>

                <van-cell class="has-right-arrow" title="规格数量选择" is-link @click="goBack"/>
                <van-cell class="has-right-arrow comment" is-link @click="goBack">
                    <template #title>
                        <TitleCore/>
                        <span class="custom-title">宝贝评价</span>
                    </template>
                </van-cell>


                <div class="comment-item flexRow0" v-for="(v,i) in data.comment" :key="i">
                    <img src="../../assets/common/user_logo.png" alt="">

                    <div class="content-wrapper flexGrow1">
                        <div class="flexRow1 jc-sb">
                            <div class="flexGrow1">
                                <div class="user">{{v.user}}</div>
                                <div class="create">{{v.createdTime}}</div>
                            </div>

                            <div class="xx">
                                <img src="../../assets/common/icon_star_active.png" alt=""
                                     v-for="(item,i) in [1,1,1,1,1]" v-show="i<v.star" :key="i">
                            </div>
                        </div>

                        <div class="cm-content">{{v.content}}</div>
                    </div>
                </div>

                <!--产品详情-->
                <div>
                    <h4>产品详情</h4>

                    <img src="../../assets/home/home_mock1.png">

                </div>
            </div>
        </div>

        <!--        <div class="jiagou  jc-sb">

                </div>-->

        <van-goods-action class="jiagou  jc-sb">
            <div  class="left-btn">
                <van-goods-action-icon class="collect"
                                       @click="goCollect"
                                       :icon="data.hasCollected?'star':'star-o'"
                                       :text="data.hasCollected?'已收藏':'收藏'"
                                       :color="data.hasCollected?'#ff5000':'#666'"/>
            </div>

            <div class="right-btn ">
                <van-goods-action-button type="warning" text="加入购物车"/>
                <van-goods-action-button type="danger" text="立即购买"/>
            </div>
        </van-goods-action>
    </div>
</template>

<script>
    import Header from "../../components/Header";
    import Swiper from "../../components/Swiper";
    import TitleCore from "../../components/TitleCore";

    export default {
        name: "ProductionDetails",
        data() {
            return {
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
                    }
                }
            }
        },
        components: {TitleCore, Swiper, Header},
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
            goCollect(){
                this.data.hasCollected=!this.data.hasCollected
            }
        }
    }
</script>

<style lang="less" scoped>
    .product-list {
        height: 100%;
        background: url("../../assets/common/bg.png") no-repeat;
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
        }

        .money {
            margin-right: 10px;
            color: #FD2049;
            line-height: 1.2rem;
        }

        .jindou {
            color: #999;
            font-size: 20px;
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

        .comment-item {
            border-bottom: 1px solid #eee;
            padding: 20px 0;

            img {
                width: 90px;
                height: 90px;
            }

            .content-wrapper {
                text-align: left;
                margin-left: 10px;

                .user {
                    color: #7B889B;
                }

                .create {
                    color: #999;
                    font-size: 20px;
                }
            }

            .xx img {
                width: 40px;
                height: 40px;
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
            .collect{
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
