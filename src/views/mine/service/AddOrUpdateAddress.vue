<template>
    <Layout :title="this.$route.params.id==='add'?'添加地址':'修改地址'" :goBack="goBack">

        <div class="main" slot="content">
            <van-field
                    class="input-item"
                    v-model="name"
                    label="姓名"
                    placeholder="请输入姓名"
                    label-align="left"
                    input-align="right"
            />
            <van-field
                    class="input-item"
                    v-model="mobile"
                    type="tel"
                    label="手机号"
                    placeholder="请输入手机号"
                    label-align="left"
                    input-align="right"
            />
            <van-field
                    class="input-item"
                    readonly
                    clickable
                    name="area"
                    :value="address"
                    label="所在地区"
                    placeholder="选择省市区"
                    @click="showArea = true"
                    input-align="right"
            />

            <van-field
                    class="input-item"
                    v-model="addressDetails"
                    autosize
                    label="详细地址"
                    type="textarea"
                    placeholder="请输入"
                    input-align="right"
            />

            <van-cell class="input-item clearBorder">
                <van-checkbox class="read-content" v-model="isDefault" icon-size="18px" checked-color="#BC0203">
                    设为默认
                </van-checkbox>
            </van-cell>

            <PageBtn title="提 交" :on-click="onSave" />

        </div>

        <van-popup v-model="showArea" position="bottom">
            <van-area
                    :area-list="areaList"
                    @confirm="onConfirm"
                    @cancel="showArea = false"
            />
        </van-popup>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";
    import areaList from '../../../utils/area'
    import {serviceApi} from "../../../services/apis";
    import global from "../../../components/global";
    import validator from 'validator'
    import PageBtn from "../../../components/PageBtn";

    export default {
        name: "AddOrUpdateAddress",
        components: {PageBtn, Layout},
        data() {
            return {
                showArea: false,
                areaList: areaList,

                name: '',
                mobile: '',
                address: '',
                province: {},
                city: {},
                area: {},
                addressDetails: '',
                isDefault: false
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            onConfirm(values) {
                this.address = values.map((item) => item.name).join(' ');
                this.province = values[0]
                this.city = values[1]
                this.area = values.length === 3 ? values[2] : {code: ''}
                this.showArea = false;
            },
            async onSave() {
                if (!this.name || !this.address || !this.addressDetails) return this.$toast.fail('请填写完整信息')

                if (!validator.isMobilePhone(this.mobile)) return this.$toast.fail('请输入正确的手机号')

                try {
                    if (this.$route.params.id === 'add') {
                        const params = {
                            hasToken: true,
                            name: this.name,
                            phone: this.mobile,
                            province_id: this.province.code,
                            city_id: this.city.code,
                            area_id: this.area.code,
                            address: this.addressDetails,
                            is_default: this.isDefault ? '2' : '1' //2默认
                        }
                        await serviceApi.addAddress(params)
                    }else{
                        const params = {
                            hasToken: true,
                            id:this.$route.params.id,
                            name: this.name,
                            phone: this.mobile,
                            province_id: this.province.code,
                            city_id: this.city.code,
                            area_id: this.area.code,
                            address: this.addressDetails,
                            is_default: this.isDefault ? '2' : '1' //2默认
                        }
                        await serviceApi.updateAddress(params)
                    }
                    this.goBack()
                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            },
            async getAddressListData() {
                try {
                    const res = await serviceApi.getAddressListData({hasToken: true})
                    console.log(res)
                    //this.address

                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            },
            async getAddressDetail(){
                try {
                    const res = await serviceApi.getAddressDetail({hasToken: true,id:this.$route.params.id})
                    const {name,phone,sheng,shi,qu,province_id,city_id,area_id,}=res.data
                    //this.address
                    this.name=name
                    this.mobile=phone
                    this.address=[sheng,shi,qu].join(' ')
                    this.province={code:province_id,name:sheng}
                    this.city={code:city_id,name:shi}
                    this.area={code:area_id,name:qu}
                    this.addressDetails=res.data.address
                    this.isDefault=res.data.is_default==='2'

                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            }
        },
        mounted() {
            //获取地址列表选择数据
            //this.getAddressListData()

            //todo:if 是修改 获取地址详情  赋默认值
            if (this.$route.params.id!=='add') this.getAddressDetail()


        }
    }
</script>

<style lang="less" scoped>
    .main {
        text-align: left;
    }

    .input-item {
        border-bottom: 1px solid #eee;
        background: transparent;

    }

    .clearBorder {
        border: none;
    }

    .save-btn {
        width: 610px;
        padding: 24px 0;
        border-radius: 45px;
        text-align: center;
        margin: 0 auto;
    }
</style>
