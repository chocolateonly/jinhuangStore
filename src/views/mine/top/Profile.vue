<template>

    <div class="bg flexCol1">
        <Header title="个人信息" _className="header flexCol0 clearBorder"
                :on-press-left="goBack">
            <div class="right-btn">保存</div>
        </Header>

        <div class=" flexCol1 overflowY">
            <div class="content">

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
            </div>
        </div>
    </div>
</template>

<script>
  import Header from "../../../components/Header";

  export default {
    name: "Profile",
    components: {Header},
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
    .bg {
        height: 100%;
        background: url("../../../assets/common/_bg.png") no-repeat;
        background-size: cover;
    }

    .right-btn{color: #fff}
    .content {
        padding: 0.4rem;
        font-size: 0.4rem;
    }
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
