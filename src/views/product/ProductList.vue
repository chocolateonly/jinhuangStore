<template>
    <div class="product-list flexCol1">
        <div class="pl-header flexCol0">

            <Header title="全部商品" _className="header flexCol0 clearBorder" :on-press-left="goBack"/>

            <div class="tabs flexRow1  ai-center">
                <div class="tab-item flexRow1 jc-center"
                     v-for="(v,i) in tabs" :key="i"
                     :class="{'active':activeTab===i}"
                     @click="setActiveTab(i)">
                    {{v}}
                </div>
            </div>

        </div>
        <div class="content flexCol1 overflowY">

            <div>
                <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                    <van-list
                            v-model="loading"
                            :finished="finished"
                            finished-text="没有更多了"
                            @load="onLoad"
                    >
                        <div class="productions flexRow1">
                            <div class="production-wrapper" v-for="(v,i) in list" :key="i">
                                <ProductionItem :v="v" :i="i" :handleClick="goProductionDetails"/>
                            </div>
                        </div>

                    </van-list>
                </van-pull-refresh>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../../components/Header";
    import ProductionItem from "./components/ProductionItem";

    export default {
        name: "ProductList",
        data() {
            return {
                tabs: ['全部', '黄金', '18K黄金', '铂金', '钻石', '珍珠'],
                activeTab: 0,

                list: [],
                total: 0,
                loading: false,
                finished: false,
                refreshing: false,
            }
        },
        components: {Header, ProductionItem},
        methods: {
            getList(page = 1, pageSize = 5) {
                console.log(page, pageSize)
                //请求数据
            },
            setActiveTab(i) {
                this.activeTab = i
            },
            goBack() {
                this.$router.go(-1)
            },
            goProductionDetails() {
                this.$router.push('/productionDetails')
            },
            onLoad() {
                setTimeout(() => {
                    if (this.refreshing) {
                        this.list = [];
                        this.refreshing = false;
                    }

                    for (let i = 0; i < 10; i++) {
                        this.list.push({
                            title: '周大福十二生肖黄金红绳款 手链甄品',
                            money: '2343',
                            img: require('../../assets/home/home_mock1.png')
                        });
                    }
                    this.loading = false;

                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 1000);
            },
            onRefresh() {
                // 清空列表数据
                this.finished = false;

                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                this.loading = true;
                this.onLoad();
            },
        }
    }
</script>

<style lang="less" scoped>
    .product-list {
        height: 100%;
        background: url("../../assets/common/_bg.png") no-repeat;
        background-size: cover;
    }

    .pl-header {
        background: url("../../assets/common/header_bg.png") no-repeat;
        background-size: cover;
    }

    .clearBorder:after {
        border: none;
    }

    .tabs {
        background: rgba(0,0,0,0.1);
        padding: 10px 30px;

        .tab-item {
            font-size: 14px;
            color: #fff;
            text-align: center;
            position: relative;
            padding-bottom: 6px;

            &.active:after {
                content: '';
                width: 40px;
                border-bottom: 2px solid #fff;
                position: absolute;
                bottom: 0px;
            }
        }

    }

    .content {
        padding: 30px;
    }

    .productions {
        flex: 2;
        flex-direction: row;
        flex-wrap: wrap;

        .production-wrapper {
            width: 50%;
        }
    }
</style>
