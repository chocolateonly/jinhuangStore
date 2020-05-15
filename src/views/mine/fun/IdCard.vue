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
                    v-model="idCard"
                    type="number"
                    label="身份证号码"
                    placeholder="请输入"
                    label-align="left"
                    input-align="right"
            />
            <div class="title">上传身份证照片</div>

            <div class="flexRow0">

                <div class="img-wrap flexCol1 ai-center">

                    <van-uploader class="uploader" :after-read="afterReadUp">
                        <div class="wrap">
                            <img v-if="idCardUp[0].content" :src="idCardUp[0].content" alt="">
                            <img v-else src="../../../assets/me/idcard_up.png" alt="">
                        </div>
                    </van-uploader>
                    <div>身份证正面</div>

                </div>

                <div class="img-wrap flexCol1 ai-center">

                    <van-uploader :after-read="afterReadDown">
                        <div  class="wrap">
                            <img  v-if="idCardDown[0].content" :src="idCardDown[0].content" alt="">
                            <img  v-else src="../../../assets/me/idcard_down.png" alt="">
                        </div>
                    </van-uploader>
                    <div>身份证反面</div>

                </div>

            </div>

            <PageBtn v-show="is_name" title="保 存" :on-click="onSubmit" />
        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";
    import {apiRoot, getParams, serviceApi} from "../../../services/apis";
    import global from "../../../components/global";
    import { StorageKey} from "../../../utils";
    import qs from "qs";
    import PageBtn from "../../../components/PageBtn";

    export default {
        name: "AddBankCard",
        components: {PageBtn, Layout},
        data() {
            return {
                name: '',
                idCard: '',
                idCardUp: [{content:''}],
                idCardDown: [{content:''}],
                idCardUpId:'',
                idCardDownId:'',
                is_name:true
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
            async upload(file){
                try {
                    //upload
                    const formData = new FormData();

                  let data=await localStorage.getItem(StorageKey)
                  const {uid,token}=JSON.parse(data)
                    formData.append('file',  file);
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
                    return u_res.data.id
                }catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            },
            async onSubmit() {
                //1,上传头像
                if (Object.keys(this.idCardUp[0]).includes('file')) {
                   const id =await this.upload(this.idCardUp[0].file)
                    this.idCardUpId=id
                }

                if (Object.keys(this.idCardDown[0]).includes('file')) {
                    const id =await this.upload(this.idCardDown[0].file)
                    this.idCardDownId=id
                }

                if (!this.name||!this.idCard||!this.idCardUpId||!this.idCardDownId) return this.$toast('请将信息填写完整')
                const params = {
                    hasToken: true,
                    realname:this.name,
                    id_card:this.idCard,
                    id_card_face:this.idCardUpId,
                    id_card_verso:this.idCardDownId
                }

                try {
                    await serviceApi.addIdCardAuth(params)
                    this.$toast('身份认证成功')
                } catch (e) {
                    global.showErrorTip(e.msg, this)
                }
            }
        },
        async beforeCreate(){
            try {
                const res=await serviceApi.profile({hasToken:true})
                this.idCardUpId=res.data.id_card_face0
                this.idCardDownId=res.data.id_card_verso0
                this.idCardUp=[{content: res.data.id_card_face,}]
                this.idCardDown=[{content: res.data.id_card_verso,}]
                this.name=res.data.realname
                this.idCard=res.data.id_card
                this.is_name=res.data.is_name!=='2'  //为2 认证成功
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

    .title {
        padding: 20px 0;
    }

    .input-item {
        background: transparent;
    }
.van-uploader{
    width:100%;
}
    .wrap{
        width:100%;
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
            display: inline-block;
        }
    }
     .uploader .van-uploader__input-wrapper{
         margin: 0 auto;
     }
    .save-btn {
        padding: 24px 0;
        border-radius: 10px;
        text-align: center;
        margin: 0 auto;
        margin-top: 100px;
    }
</style>
