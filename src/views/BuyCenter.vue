<template>
    <div class="bg flexCol1">
        <div class="header">
            <div class="flexCol1 jc-center ai-center">
            <div class="tabs flexRow0  ai-center jc-center">
                <div class="tab-item flexRow1 jc-center"
                     v-for="(v,i) in tabs" :key="i"
                     :class="{'active':activeTab===i}"
                     @click="setActiveTab(i)">
                    <div>{{v}}</div>
                </div>
            </div>
            </div>

        </div>

        <div class="select_date" @click="showPicker = true">
            {{selectedDate}}
            <van-icon name="arrow-down"/>
        </div>

        <div class=" flexCol1 overflowY" >
            <div class="content">

                <FlatListView :key="`${activeTab}_${selectedDate}_${refreshing}`" :getList="(page,pageSize)=>getList(page,pageSize)">
                    <template scope="list">
                        <div class="order" v-for="(v,i) in list.data" :key="i">
                            <OrderItem :v="v" :type="activeTab" :onBuyOut="onBuyOut"/>
                        </div>
                    </template>
                </FlatListView>

            </div>
        </div>
        <!--        金条购置按钮-->
        <div class="jtgz-btn">
            <full-button  v-if="show==='1'"  _class-name="sq-btn" title="金条购置" :on-click="goBuyPage"/>

            <full-button  v-else _class-name="sq-btn gray" title="金条购置" />
        </div>



        <!--        日期选择弹框-->
        <van-popup v-model="showPicker" position="bottom">
            <van-datetime-picker
                    v-model="currentDate"
                    type="year-month"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @confirm="onConfirm"
                    @cancel="showPicker = false"
            />
        </van-popup>

    </div>

</template>

<script>
    import moment from 'moment'
    import FullButton from "../components/FullButton";
    import OrderItem from "./buycenter/components/OrderItem";
    import {serviceApi} from "../services/apis";
    import global from "../components/global";
    import FlatListView from "../components/flatListView/FlatListView";

    export default {
        name: "BuyCenter",
        data() {
            return {
                activeTab: 0,
                tabs: ['预定订单', '历史订单'],

                minDate: moment().add(-5, 'year').toDate(),
                maxDate: moment().toDate(),
                currentDate: moment().toDate(),  //for pop
                showPicker: false,
                selectedDate: this.formatDate(),  //for selected val
                show:'',
                refreshing:false
            }
        },
        components: {FlatListView, OrderItem, FullButton},
        methods: {
            async onBuyOut(item) {
                try {
                    await serviceApi.sellOut({id: item.id, hasToken: true})
                    this.$toast('成功卖出')
                    //this.$router.go(0)
                    this.refreshing=true
                    this.$nextTick(()=>{
                        this.refreshing=false
                    })
                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            },
            goBack() {
                this.$router.go(-1)
            },
            setActiveTab(i) {
                this.activeTab = i
            },
            onConfirm(date) {
                this.selectedDate = this.formatDate(date);
                this.showPicker = false;
            },
            formatDate(date) {
                return moment(date).format('YYYY-MM')
            },
            goBuyPage() {
                this.$router.push('/goldBuy')
            },
            async getList(page) {

                const params = {
                    page: page,
                    sta: this.activeTab + 1,
                    hasToken: true,
                    month:this.selectedDate
                }
                try {
                    const res = await serviceApi.getBuyCenterList(params)
                    this.show=res.data.switch
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
        background: url("../assets/common/_bg.png") no-repeat;
        background-size: cover;
    }

    .content {
        padding: 0.4rem;
        font-size: 0.4rem;
    }

    .tabs {
        width:400px;
        padding: 30px 30px;

        .tab-item {
            font-size: 30px;
            color: #fff;
            text-align: center;
            position: relative;
            padding-bottom: 6px;
            margin: 0 auto;

            &.active:after {
                content: '';
                width: 60px;
                height: 4px;
                background:  #fff;
                position: absolute;
                bottom: 0px;
            }
        }

    }

    .select_date {
        padding: 10px 20px;
        background: #fff;
        display: flex;
        align-items: center;
        font-size: 28px;
    }

    .jtgz-btn {
        padding: 0 0.4rem;


            .gray{
                background: #ccc;
            }

    }

</style>
