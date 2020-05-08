<template>

    <div class="bg flexCol1">
        <Header title="个人信息" _className="header clearBorder"
                :on-press-left="goBack">
            <div class="right-btn" @click="onSave">保存</div>
        </Header>

        <div class=" flexCol1 overflowY">
            <div class="content">

                <div class="main">
<!--                    <input @change="getFile" type="file">-->
                    <van-cell class="set-avatar ai-center" title="头像">
                        <template #right-icon>
                            <van-uploader :after-read="afterRead">
                                <div class="img-wrap">
                                    <img v-if="fileList[0].content" :src="fileList[0].content" alt="">
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
                    <!--            <van-field
                                        class="input-item"
                                        v-model="intro"
                                        label="个人介绍"
                                        autosize
                                        type="textarea"
                                        placeholder="请输入"
                                        label-align="left"
                                        input-align="right"
                                />-->
                    <van-field
                            class="input-item"
                            v-model="email"
                            label="电子邮箱"
                            placeholder="请输入电子邮箱"
                            label-align="left"
                            input-align="right"
                    />
                    <!--            <van-field
                                        class="input-item"
                                        v-model="code"
                                        label="分销码"
                                        placeholder="请输入分销码"
                                        label-align="left"
                                        input-align="right"
                                />-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../../../components/Header";
    import {apiRoot, serviceApi} from "../../../services/apis";
    import global from "../../../components/global";
    import {lastRecord} from "../../../utils";
    import validator from 'validator'
    import qs from 'qs'
    import {getParams} from "../../../services/apis";

    export default {
        name: "Profile",
        components: {Header},
        data() {
            return {
                nickName: '',
                intro: '',
                email: '',
                code: '',
                fileList: [{content:''}],
                avatarId:''
            }
        },
        methods: {
            getFile(e) {
                this.fileList.push(e.target.files);
                console.log(this.fileList)
            },
            goBack() {
                this.$router.go(-1)
            },
            async afterRead(file) {
                console.log(file)
                // 此时可以自行将文件上传至服务器
                    this.fileList = [file]
            },
            async onSave() {
                if (!validator.isEmail(this.email)) return this.$toast.fail('邮箱格式不对')

                try {
                //1,上传头像
              if (Object.keys(this.fileList[0]).includes('file')) {
                  //upload
                  const formData = new FormData();
                  const {uid,token}=lastRecord()
                  formData.append('file',  this.fileList[0].file);
                  formData.append("uid", uid);
                  formData.append("token", token);
                  const options = {
                      //'Content-Type': 'multipart/form-data',
                  };
                  const body={
                      hasToken:true
                  }

                  let u_res=await fetch(`${apiRoot}/api/index/uploadImg?${qs.stringify(getParams(body))}`,{
                      method: 'POST',
                      headers: { ...options},
                      body:formData,
                  })
                  u_res=await u_res.json()
                  if(u_res.code==='400'){
                      global.showErrorTip(u_res.desc, this)
                  }
                 else this.avatarId=u_res.data.id
              }


                    if(!this.avatarId)  return this.$toast.fail('请上传头像')

                const params = {
                    hasToken: true,
                    avatar: this.avatarId,
                    nickname:this.nickName,
                    email:this.email,
                }

               //2,修改
                    await serviceApi.updateInfo(params)
                    this.$router.push('/tab/mine')
                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            }
        },
        async beforeCreate() {
            const params = {
                hasToken: true
            }

            try {
                const res = await serviceApi.profile(params)
                this.nickName = res.data.nickname
               if (res.data.avatar) {
                   this.fileList = [{content: res.data.image,}]
                   this.avatarId=res.data.avatar
                   this.email = res.data.email

               }


            } catch (e) {
                global.showErrorTip(e.msg, this)
            }
        }
    }
</script>

<style lang="less" scoped>
    .bg {
        height: 100%;
        background: url("../../../assets/common/_bg.png") no-repeat;
        background-size: cover;
    }

    .right-btn {
        color: #fff
    }

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

    .set-avatar {
        background: transparent;
        border-bottom: 1px solid #eee;
    }
.img-wrap{

    width: 124px;
    height: 124px;
    border-radius: 62px;
    background: #fcc;
}
    img {
        width: 124px;
        height: 124px;
        border-radius: 62px;
    }
</style>
