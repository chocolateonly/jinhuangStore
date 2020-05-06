<template>
    <Layout :title="this.$route.params.type==='add'?'添加地址':'修改地址'" :go-back="goBack">

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


            <div class="save-btn lg-bg-red flexCol0 ai-center" @click="onSave">
                <span>提 交</span>
            </div>

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

    export default {
        name: "AddOrUpdateAddress",
        components: {Layout},
        data() {
            return {
                showArea: false,
                areaList: areaList,

                name: 'zz',
                mobile: '13476260156',
                address: '',
                province: {},
                city: {},
                area: {},
                addressDetails: '襄阳市樊城区yy',
                isDefault: true
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            onConfirm(values) {
                this.address = values.map((item) => item.name).join('/');
                this.province = values[0]
                this.city = values[1]
                this.area = values.length === 3 ? values[2] : {code: ''}
                this.showArea = false;
            },
            async onSave() {
                //fixme:
                if (!this.name || !this.address || !this.addressDetails) return this.$toast.fail('请填写完整信息')

                if (!validator.isMobilePhone(this.mobile)) return this.$toast.fail('请输入正确的手机号')

                const params = {
                    hasToken: true,
                    name: this.name,
                    phone: this.mobile,
                    province_id: this.province.code,
                    city_id: this.city.code,
                    area_id: this.area.code,
                    address: this.addressDetails,
                    is_default: this.isDefault ? 2 : 1
                }

                try {
                    if (this.$route.params.type === 'add') {
                        await serviceApi.addAddress(params)
                    }
                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }

//价格*规格*数量
//服务费：规格*数量/ 1000
            },
            async getAddressList() {
                try {
                    const res = await serviceApi.getAddressListData({hasToken: true})
                    console.log(res)
                    //this.address

                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            }
        },
        mounted() {
            //获取地址列表选择数据
            //this.getAddressList()

            //todo:if update 获取地址详情  赋默认值



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
