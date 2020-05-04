<template>
    <Layout title="身份认证" :go-back="goBack">
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
                    v-model="name"
                    type="number"
                    label="身份证号码"
                    placeholder="请输入"
                    label-align="left"
                    input-align="right"
            />
            <div class="title">上传身份证照片</div>

            <div class="flexRow0">

                <div class="img-wrap flexCol1 ai-center">

                    <van-uploader :after-read="afterReadUp">
                        <div>
                            <img v-if="idCardUp.length>0" :src="idCardUp[0].content" alt="">
                            <img v-else src="../../../assets/me/idcard_up.png" alt="">
                        </div>
                    </van-uploader>
                    <div>身份证正面</div>

                </div>

                <div class="img-wrap flexCol1 ai-center">

                    <van-uploader :after-read="afterReadDown">
                        <div>
                            <img v-if="idCardUp.length>0" :src="idCardDown[0].content" alt="">
                            <img v-else src="../../../assets/me/idcard_down.png" alt="">
                        </div>
                    </van-uploader>
                    <div>身份证反面</div>

                </div>

            </div>
            <div class="save-btn lg-bg-red " @Click="onSubmit">
                <span>保存</span>
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
                idCard: '',
                idCardUp: [],
                idCardDown: []
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            afterReadUp(file) {
                this.idCardUp = [file]
            },
            afterReadDown(file) {
                this.idCardDown = [file]
            },
            onSubmit() {

            }
        }
    }
</script>

<style lang="less" scoped>
    .main {
        text-align: left;
    }

    .title {
        padding: 20px 0;
    }

    .input-item {
        background: transparent;
    }

    .img-wrap {
        background: #fff;
        padding: 10px;
        border-radius: 5px;
        border: 2px solid #ccc;
        margin: 10px;

        img {
            width: 100%;
            height: 200px;
        }
    }

    .save-btn {
        padding: 24px 0;
        border-radius: 10px;
        text-align: center;
        margin: 0 auto;
        margin-top: 100px;
    }
</style>
