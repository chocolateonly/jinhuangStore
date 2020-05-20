<template>
    <div class="bg flexCol1">

        <Header title="收货地址" _className="header  clearBorder"
                :on-press-left="goBack">
            <div class="header-right-btn" @click="goAddOrUpdateAddress">添加</div>
        </Header>

        <div class=" flexCol1 overflowY">
            <div class="content">
                <FlatListView :key="refreshing" :getList="(page,pageSize)=>getList(page,pageSize)">
                    <template scope="list">
                        <div v-for="(v,i) in list.data" :key="i">
                            <div class="flexRow0 ai-center">

                                <div class="select-box" v-show="$route.params.type==='select'">
                                    <van-radio :name="v" class="read-content" v-model="selected" icon-size="18px"
                                                  checked-color="#BC0203" @click="()=>onSelected(v)">
                                    </van-radio>
                                </div>

                                <div class="flexGrow1">
                                    <AddressItem :v="v" :i="i" :deleteAddress="deleteAddress"/>
                                </div>
                            </div>
                        </div>
                    </template>
                </FlatListView>

            </div>
        </div>
    </div>

</template>

<script>
    import FlatListView from "../../../components/flatListView/FlatListView";
    import AddressItem from "./components/AddressItem";
    import Header from "../../../components/Header";
    import {serviceApi} from "../../../services/apis";
    import global from "../../../components/global";
    import {mapActions, mapGetters,} from 'vuex'

    export default {
        name: "AddressList",
        components: {Header, AddressItem, FlatListView},
        data() {
            return {
                selected:{},
                refreshing:false
            }
        },
        computed:mapGetters(['address']),
        methods: {
            ...mapActions(['selectAddress']),
            goBack() {
                this.$router.go(-1)
            },
            async deleteAddress(v){

                try {
                    await serviceApi.deleteAddress({id:v.id,hasToken: true})
                    //this.$router.go(0)
                    this.refreshing=true
                    this.$nextTick(()=>{
                        this.refreshing=false
                    })
                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            },
            async getList() {
                const params = {
                    hasToken: true
                }

                try {
                    const res = await serviceApi.getAddressList(params)
                    return {total: res.data.length, list: res.data}
                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            },
            async onSelected(v) {
                await this.selectAddress(v)
                this.goBack()
            },
            goAddOrUpdateAddress() {
                this.$router.push(`/addOrUpdateAddress/add`)
            }

        }
    }
</script>

<style lang="less" scoped>
    .bg {
        height: 100%;
        background: url("../../../assets/common/_bg.png") no-repeat;
        background-size: cover;
    }

    .content {
        padding: 30px;
        font-size: 30px;
    }

    .header-right-btn {
        color: #fff;
    }
    .select-box{
        margin-right: 10px;
    }
</style>
