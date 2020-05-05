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
                    v-model="bankcardNum"
                    label="银行卡号"
                    placeholder="请输入"
                    label-align="left"
                    input-align="right"

            />

            <div class="save-btn lg-bg-red " @Click="onSubmit">
                <span>绑定</span>
            </div>

            <div class="tip">
                请正确将你的银行卡卡号输入，这样您的收益才会到达您的个 人账户里。
            </div>
        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";

    export default {
        name: "AddBankCard",
        components: {Layout},
        data() {
            return {
                name: '',
                bankcardNum: ''
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            onSubmit(){

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
