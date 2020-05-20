<template>
    <Layout title="绑定银行卡" :go-back="goBack">
        <div class="main" slot="content">
            <van-field
                    class="input-item"
                    v-model="name"
                    label="持卡人"
                    placeholder="请输入"
                    label-align="left"
                    input-align="right"

            />
            <van-field
                    class="input-item"
                    readonly
                    clickable
                    label="选择银行"
                    :value="selectBank.name"
                    placeholder="请选择"
                    @click="showPicker = true"
                    input-align="right"
            />
            <van-field
                    class="input-item"
                    v-model="bankcardNum"
                    label="银行卡号"
                    type="digit"
                    placeholder="请输入"
                    label-align="left"
                    input-align="right"

            />
            <van-field
                    class="input-item"
                    v-model="mobile"
                    type="number"
                    label="手机号"
                    placeholder="请输入"
                    label-align="left"
                    input-align="right"

            />

            <PageBtn title="绑 定" :on-click="onSubmit" />

            <div class="tip">
                请正确将你的银行卡卡号输入，这样您的收益才会到达您的个 人账户里。
            </div>
        </div>

        <van-popup v-model="showPicker" position="bottom">
            <van-picker
                    title="选择银行"
                    show-toolbar
                    :columns="getBankCardArr()"
                    @confirm="onConfirm"
                    @cancel="onCancel"
            />
        </van-popup>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";
    import {serviceApi} from "../../../services/apis";
    import global from "../../../components/global";
    import validator from 'validator'
    import PageBtn from "../../../components/PageBtn";
    export default {
        name: "AddBankCard",
        components: {PageBtn, Layout},
        data() {
            return {
                name: '',
                bankcardNum: '',
                selectBank:{},
                mobile:'',
                showPicker:false,
                bankcardListData:[]
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            onConfirm(value, index) {
                console.log(`当前值：${value}, 当前索引：${index}`);
                this.selectBank=this.bankcardListData[index]
                this.showPicker=false
            },
            onCancel() {

            },
            getBankCardArr(){
               return this.bankcardListData.reduce((acc,cur)=>{
                   acc.push(cur.name)
                   return acc
               },[])
            },
            async onSubmit(){
                if (!validator.isMobilePhone(this.mobile)) return this.$toast('请输入手机号')

                const params={
                    hasToken:true,
                    account_name:this.name,
                    account_no:this.bankcardNum,
                    bank_id:this.selectBank.id,
                    mobile:this.mobile
                }

                try {
                    await  serviceApi.addBankAccount(params)
                    await this.$toast('绑定成功')
                    this.$router.go(-1)
                }catch (e) {
                    console.log(e)
                    global.showErrorTip(e.msg,this)
                }
            }
        },
        async beforeCreate(){
            try {
                const res=await serviceApi.geBanksListData({hasToken:true})
                this.bankcardListData=res.data
            }catch (e) {
                global.showErrorTip(e.msg,this)
            }
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
    .save-btn {
        padding: 24px 0;
        border-radius: 10px;
        text-align: center;
        margin: 0 auto;
        margin-top: 100px;
    }
    .tip{
        margin-top: 30px;
        font-size:20px;
        color:rgba(128,128,128,1);
    }
</style>
