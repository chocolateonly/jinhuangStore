<template>
    <Layout title="评价订单" :go-back="goBack">
        <div class="main" slot="content">
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


            <van-field
                    class="input-item"
                    v-model="comment"
                    label="评价"
                    autosize
                    type="textarea"
                    placeholder="请输入内容"
                    label-align="left"
                    input-align="right"
            />

            <van-field name="rate" label="评分">
                <template #input>
                    <van-rate v-model="star" />
                </template>
            </van-field>

        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";
    import {serviceApi} from "../../../services/apis";
    import global from "../../../components/global";

    export default {
        name: "OrderComment",
        components: {Layout},
        data() {
            return {
                oplist:[],
                comment:'',
                star:0
            }
        },
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
            async getOrderDetail() {

                const params = {
                    hasToken: true,
                    id: this.$route.params.id
                }

                try {
                    const res = await serviceApi.getOrderDetail(params)
                    this.oplist = res.data.oplist
                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            },
        },
        mounted() {
            this.getOrderDetail()
        }
    }
</script>

<style lang="less" scoped>
    .main {
        text-align: left;
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


        .order-title {
            font-weight: 400;
            color: rgba(33, 33, 33, 1);
            line-height: 41px;
            text-align: left;
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
    }

</style>
