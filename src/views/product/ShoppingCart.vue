<template>
    <div class="bg flexCol1">
        <Header title="购物车" _className="header flexCol0 clearBorder" :on-press-left="goBack"></Header>

        <div class=" flexCol1 overflowY">
            <div class="content flexGrow1">

                <!--购物车列表-->
                <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                    <van-list
                            v-model="loading"
                            :finished="finished"
                            :finished-text="finished&&list.length>0?'没有更多了':''"
                            @load="onLoad"
                    >
                        <div class="flexGrow1" v-if="list.length>0||loading">
                            <div class="flexGrow1" v-for="(v,i) in list" :key="i" >
                                <GoodsItemInCart :v="v" :i="i"
                                                 :onSelected="onSelected"
                                                 :onChangeNumber="onChangeNumber"
                                                 :onDelete="onDelete"/>
                            </div>
                        </div>

                        <!--购物车为空-->
                        <div v-else>
                            <img class="cart-img" src="../../assets/home/icon_shoppingcart.png" alt="">
                            <div class="tip">购物车是空的</div>

                            <button class="full_btn" @click="onHome">
                                去首页逛逛
                            </button>
                        </div>

                    </van-list>
                </van-pull-refresh>

            </div>
        </div>

        <van-submit-bar class="footer-bar" :price="finPrice*100" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checkedAll" checked-color="#BC0203" @change="onCheckedAll">全选</van-checkbox>
        </van-submit-bar>

    </div>

</template>

<script>
    import Header from "../../components/Header";
    import GoodsItemInCart from "./components/GoodsItemIncart";
    import {serviceApi} from "../../services/apis";
    import global from "../../components/global";
    import _ from 'lodash'

    export default {
        name: "ShoppingCart",
        components: { GoodsItemInCart, Header},
        data() {
            return {
                list: [],
                total: 0,
                loading: false,
                finished: false,
                refreshing: false,
                page: 1,
                pageSize: 5,

                checkedAll: false,
                finPrice:0,
            }
        },
        methods: {

            onRefresh() {
                // 清空列表数据
                this.finished = false;
                this.page = 1;
                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                this.loading = true;
                this.onLoad();
            },
            async onLoad() {

                if (this.refreshing) {
                    this.list = [];
                    this.refreshing = false;
                }

                if (this.page === 1) {
                    this.list = []
                }

                if (this.loading) {
                    const {total = 0, list = []} = await this.getList(this.page, this.pageSize) || {}
                    this.list.push(...list)
                    this.total = total
                    this.loading = false
                    this.page++
                    this.changeList(this.list)
                    console.log(this.page, this.list.length, Number(total))
                    if (this.list.length >= Number(total)) {
                        this.finished = true;
                    }

                }
            },
            goBack() {
                this.$router.go(-1)
            },
            onHome() {
                this.$router.push('/tab/home')
            },
            async onSubmit() {
                if (Number(this.finPrice)===0) return this.$toast('请选择要购买的商品')
                const params={
                    hasToken: true
                }
                try {

                        await serviceApi.addGoodsNum(params)

                } catch (e) {
                    global.showErrorTip(e.msg,this)
                }
            },
            changeList(list){
                console.log(list)
            },
            getFinPrice(){
                let finally_money=0
                this.list.reduce((acc,cur)=>{
                   if (cur.selected) {
                       finally_money+=Number(cur.num)*Number(cur.price)
                       acc.push(cur)
                   }
                    return acc
                },[])

                this.finPrice=finally_money
            },
            onSelected() {
                this.getFinPrice()
            },
            async onChangeNumber(item, type) {
                try {
                    if (type === 1) {//add
                        await serviceApi.addGoodsNum({id: item.id, hasToken: true})
                    } else {
                        await serviceApi.cutGoodsNum({id: item.id, hasToken: true})
                    }
                    this.getFinPrice()
                } catch (e) {
                    global.showErrorTip(e.msg,this)
                }
            },
            async onDelete(item) {

                try {
                await serviceApi.deleteGoods({id:item.id,hasToken:true})
                this.list=_.difference(this.list,item)
                this.getFinPrice()
                } catch (e) {
                    global.showErrorTip(e.msg,this)
                }
            },
            onCheckedAll() {
                this.list = this.list.reduce((acc, cur) => {
                    acc.push({...cur, selected: this.checkedAll})
                    return acc
                }, [])
            },
            async getList(page) {
                // return setList(page,pageSize,{
                //     "id": "1",
                //     "price": "1000.00",
                //     "num": "1",
                //     "integral": "20",
                //     "create_time": "2020-04-27 10:52:27",
                //     "name": "我去",
                //     "image": "",
                //     "stock": "100000",
                //     selected:false
                // })

                const params = {
                    hasToken: true,
                    page: page
                }

                try {
                    const res = await serviceApi.getShoppingCartList(params)
                    const data=res.data.data.reduce((acc,cur)=>{
                        acc.push({...cur,selected:false})
                        return acc
                    },[])
                    return {total: res.data.count, list: data}

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
    .van-submit-bar{
        position: relative;
    }
</style>
