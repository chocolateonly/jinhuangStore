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


            <div class="save-btn lg-bg-red flexCol0 ai-center" @Click="onSave">
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
  export default {
    name: "AddOrUpdateAddress",
    components: { Layout},
    data() {
      return {
          showArea:false,
          areaList:areaList,

       name:'',
          mobile:'',
          address:'',
          addressDetails:'',
          isDefault:true
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
        onConfirm(values) {
            this.address = values.map((item) => item.name).join('/');
            this.showArea = false;
        },
        onSave(){

        }
    },
      mounted() {
        //todo:if update 获取地址详情  赋默认值
          //
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
    .clearBorder{
        border: none;
    }
    .save-btn{
        width: 610px;
       padding: 24px 0;
        border-radius: 45px;
        text-align: center;
        margin: 0 auto;
    }
</style>
