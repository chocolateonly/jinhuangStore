<template>
    <Layout title="个人信息" :go-back="goBack">
        <div class="main">

            <van-cell class="set-avatar ai-center" title="头像">
                <template #right-icon>
                    <van-uploader :after-read="afterRead">
                        <div>
                            <img v-if="fileList.length>0" :src="fileList[0].content" alt="">
                            <img v-else src="../../../assets/me/add_img.png" alt="">
                        </div>
                    </van-uploader>
                </template>
            </van-cell>
            <van-field
                    class="input-item"
                    v-model="nickName"
                    label="昵称"
                    placeholder="请输入昵称"
                    label-align="left"
                    input-align="right"
            />
            <van-field
                    class="input-item"
                    v-model="intro"
                    label="个人介绍"
                    rows="1"
                    autosize
                    type="textarea"
                    placeholder="请输入"
                    label-align="left"
                    input-align="right"
            />
            <van-field
                    class="input-item"
                    v-model="email"
                    label="电子邮箱"
                    placeholder="请输入电子邮箱"
                    label-align="left"
                    input-align="right"
            />
            <van-field
                    class="input-item"
                    v-model="code"
                    label="分销码"
                    placeholder="请输入分销码"
                    label-align="left"
                    input-align="right"
            />
        </div>
    </Layout>

</template>

<script>
  import Layout from "../../../components/Layout";

  export default {
    name: "Profile",
    components: {Layout},
    data() {
      return {
        username: '',
        nickName:'',
        intro:'',
        email:'',
        code:'',
        fileList:[]
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file);
        this.fileList=[file]
      },
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
    .set-avatar{
        background: transparent;
        border-bottom: 1px solid #eee;
    }
    img{
        width:124px ;
        height: 124px;
        border-radius: 62px;
    }
</style>
