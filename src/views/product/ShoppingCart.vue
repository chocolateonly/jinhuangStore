<template>
    <div class="bg flexCol1">
        <Header title="购物车" _className="header flexCol0 clearBorder" :on-press-left="goBack"></Header>

        <div class=" flexCol1 overflowY">
            <div class="content">
                <!--购物车为空-->
                <!--                <div v-if="goods.length===0">
                                    <img class="cart-img" src="../../assets/home/icon_shoppingcart.png" alt="">
                                    <div class="tip">购物车是空的</div>

                                    <button class="full_btn" @click="onHome">
                                        去首页逛逛
                                    </button>
                                </div>-->

                <!--购物车列表-->
                <FlatListView :getList="(page,pageSize)=>getList(page,pageSize)">
                    <template scope="list">
                        <div class="flexGrow1" v-for="(v,i) in list.data" :key="i">
                            <GoodsItemInCart :v="v" :i="i"
                                             :onSelected="onSelected"
                                             :onChangeNumber="onChangeNumber"
                                             :onDelete="onDelete"/>
                        </div>
                    </template>
                </FlatListView>

            </div>
        </div>

        <van-submit-bar class="footer-bar" :price="0" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checkedAll" checked-color="#BC0203" @change="onCheckedAll">全选</van-checkbox>
        </van-submit-bar>

    </div>

</template>

<script>
    import Header from "../../components/Header";
    import GoodsItemInCart from "./components/GoodsItemIncart";
    import {serviceApi} from "../../services/apis";
    import global from "../../components/global";
    import FlatListView from "../../components/flatListView/FlatListView";

    export default {
        name: "ShoppingCart",
        components: {FlatListView, GoodsItemInCart, Header},
        data() {
            return {
                goods: [
                    {id: '1', title: '周生生格桑花珍珠耳钉', summary: '999+好评爆款', number: 2, selected: false},
                    {id: '2', title: 'charme黄金串珠吊坠', summary: '999+好评爆款，洁齿又护龈', number: 2, selected: false},
                ],
                checkedAll: false
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            onHome() {
                this.$router.push('/tab/home')
            },
            onSubmit() {

            },
            onSelected(item) {
                console.log(item)
            },
            async onChangeNumber(item, type) {
                try {
                    if (type === 1) {//add
                        await serviceApi.addGoodsNum({id: item.id, hasToken: true})
                    } else {
                        await serviceApi.cutGoodsNum({id: item.id, hasToken: true})
                    }
                } catch (e) {
                    global.showErrorTip(e.msg)
                }
            },
            onDelete(item) {
                console.log(item)
            },
            onCheckedAll() {

                this.goods = this.goods.reduce((acc, cur) => {
                    acc.push({...cur, selected: this.checkedAll})
                    return acc
                }, [])
            },
            async getList(page) {
                const params = {
                    hasToken: true,
                    page: page
                }

                try {
                    const res = await serviceApi.getShoppingCartList(params)

                    return {total: res.data.count, list: res.data.data}
                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }


            },
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
        padding: 0.4rem;
        font-size: 0.4rem;
    }

    .cart-img {
        width: 200px;
        height: 200px;
    }

    .tip {
        font-size: 26px;
        font-weight: 400;
        color: rgba(150, 148, 148, 1);
        line-height: 36px;
    }

    .full_btn {
        width: 300px;
        height: 60px;
        background: linear-gradient(#F24949, #C40D0E);
        border-radius: 30px;
        color: #fff;
        font-size: 28px;
        margin-top: 32px;

        &:hover {
            opacity: 0.8;
        }
    }

    .footer-bar {
        width: 100%;
        background: url("../../assets/common/_bg.png") no-repeat;
        background-size: cover;
        box-shadow: 0px 0px 14px 4px rgba(115, 115, 115, 0.1);
    }
</style>
