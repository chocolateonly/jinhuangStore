<template>
    <Layout title="参数设置" :go-back="goBack">
        <div class="main" slot="content">
            <van-field
                    class="input-item"
                    v-model="yinli"
                    label="盈利"
                    placeholder="请输入"
                    label-align="left"
                    input-align="right"

            >
                <template #button>
                    <div>%</div>
                </template>
            </van-field>
            <van-field
                    class="input-item"
                    v-model="yinli"
                    label="亏损"
                    placeholder="请输入"
                    label-align="left"
                    input-align="right"

            >
                <template #button>
                    <div>%</div>
                </template>
            </van-field>

            <div class="save-btn lg-bg-red " @Click="onSubmit">
                <span>保存</span>
            </div>

        </div>
    </Layout>

</template>

<script>
  import Layout from "../../../components/Layout";

  export default {
    name: "SetParams",
    components: {Layout},
    data() {
      return {
          yinli:'',
          kuisun:''
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
    .save-btn{
        width: 610px;
        padding: 24px 0;
        border-radius: 20px;
        text-align: center;
        margin: 0 auto;
        margin-top: 100px;
    }
</style>
