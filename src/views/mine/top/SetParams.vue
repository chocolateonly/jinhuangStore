<template>
    <Layout title="参数设置" :go-back="goBack">
        <div class="main" slot="content">
            <van-field
                    class="input-item"
                    v-model="yinli"
                    label="盈利"
                    type="digit"
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
                    v-model="kuisun"
                    label="亏损"
                    type="digit"
                    placeholder="请输入"
                    label-align="left"
                    input-align="right"

            >
                <template #button>
                    <div>%</div>
                </template>
            </van-field>

            <div class="save-btn lg-bg-red " @click="onSubmit">
                <span>保存</span>
            </div>

        </div>
    </Layout>

</template>

<script>
  import Layout from "../../../components/Layout";
  import {serviceApi} from "../../../services/apis";
  import global from "../../../components/global";

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
        async onSubmit(){
          if (this.yinli||this.kuisun) return this.$toast('所有字段必填')
            const params={
                hasToken:true,
                profit_scale:this.yinli,
                loss_scale:this.kuisun
            }

            try {
                await  serviceApi.setParams(params)

            }catch (e) {
                global.showErrorTip(e.msg,this)
            }
        }
    },
      async beforeCreate(){
        try {
            const res=await serviceApi.getMyParams({hasToken:true})
           if (res.data){
               this.yinli=res.data.profit_scale
               this.kuisun=res.data.loss_scale
           }
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
    .save-btn{
        width: 610px;
        padding: 24px 0;
        border-radius: 20px;
        text-align: center;
        margin: 0 auto;
        margin-top: 100px;
    }
</style>
