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
                    type="number"
                    label="联系方式"
                    placeholder="请输入"
                    label-align="left"

            />
            <div class="save-btn lg-bg-red " @click="onSubmit">
                <span>提 交</span>
            </div>


        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";
    import {serviceApi} from "../../../services/apis";
    import global from "../../../components/global";
    import validator from 'validator'
    export default {
        name: "Feedback",
        components: {Layout},
        data() {
            return {
                title: 'test',
                mobile: '13476260156',
                feedback:'test'
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            async onSubmit(){
                if (!validator.isMobilePhone(this.mobile)) return  this.$toast('请输入正确手机号')
                const params={
                    hasToken:true,
                    title:this.title,
                    content:this.feedback,
                    phone:this.mobile
                }

                try {
                    await  serviceApi.addFeedback(params)
                    this.$toast('提交成功')
                }catch (e) {
                    global.showErrorTip(e.msg,this)
                }
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
