<template>
    <Layout title="意见反馈" :go-back="goBack">
        <div class="main" slot="content">
            <van-field
                    class="input-item"
                    v-model="title"
                    label="标题"
                    placeholder="请输入"
                    label-align="left"

            />

            <van-field
                    class="input-item"
                    v-model="feedback"
                    autosize
                    label="反馈内容"
                    type="textarea"
                    placeholder="请输入"
            />



            <van-field
                    class="input-item"
                    v-model="mobile"
                    type="tel"
                    label="联系方式"
                    placeholder="请输入"
                    label-align="left"

            />
            <div class="save-btn lg-bg-red " @Click="onSubmit">
                <span>提 交</span>
            </div>


        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";

    export default {
        name: "Feedback",
        components: {Layout},
        data() {
            return {
                title: '',
                mobile: '',
                feedback:''
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
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

    .input-item {
        border-bottom: 1px solid #eee;
        background: transparent;
/*        .van-field__label.van-cell__title{
            -webkit-box-flex: 0;
            -webkit-flex: none;
            flex: 0 !important;
            box-sizing: border-box;
            width: 90px !important;
        }
        .van-cell__title, .van-cell__value{
            -webkit-box-flex: 0;
            -webkit-flex: 0;
            flex: 0;
        }
        div{
                -webkit-box-flex: 0;
                -webkit-flex: 0;
                flex: 0;

        }*/
    }

    .save-btn {
        padding: 24px 0;
        border-radius: 10px;
        text-align: center;
        margin: 0 auto;
        margin-top: 100px;
    }

    .tip {
        margin-top: 30px;
        font-size: 20px;
        color: rgba(128, 128, 128, 1);
    }

</style>
