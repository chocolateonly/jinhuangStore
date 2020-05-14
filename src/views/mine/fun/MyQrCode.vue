<template>
    <Layout title="我的推广码" :go-back="goBack">
        <div class="main flexCol1" slot="content">

            <div class="img-wrap" >

                <img id="imageWrapper" :src="data.erweima" alt="">
                <!--<div style="margin-top: 10px">(长按图片即可保存)</div>-->
            </div>


            <!--            <button @click="toSave">保存图片</button>-->

            <van-password-input
                    class="code"
                    :value="data.invite_code"
                    :mask="false"
                    :show="false"
            />

        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";
    import {serviceApi} from "../../../services/apis";
    import global from "../../../components/global";
    //import html2canvas from 'html2canvas'

    export default {
        name: "MyQrCode",
        components: {Layout},
        data() {
            return {
               data:{}
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            //点击保存
            // toSave() {
            //     html2canvas(document.getElementById("imageWrapper")).then(canvas => {
            //         console.log(canvas)
            //         let saveUrl = canvas.toDataURL('image/png')
            //         let aLink = document.createElement('a')
            //         let blob = this.base64ToBlob(saveUrl)
            //         let evt = document.createEvent('HTMLEvents')
            //         evt.initEvent('click', true, true)
            //         aLink.download = '二维码.jpg'
            //         aLink.href = URL.createObjectURL(blob)
            //         aLink.click()
            //     });
            // },
            // //这里把图片转base64
            // base64ToBlob(code) {
            //     let parts = code.split(';base64,')
            //     let contentType = parts[0].split(':')[1]
            //     let raw = window.atob(parts[1])
            //     let rawLength = raw.length
            //     let uInt8Array = new Uint8Array(rawLength)
            //     for (let i = 0; i < rawLength; ++i) {
            //         uInt8Array[i] = raw.charCodeAt(i)
            //     }
            //     return new Blob([uInt8Array], {type: contentType})
            // },
        },
        async beforeCreate() {
            const params = {
                hasToken: true
            }

            try {
                const res = await serviceApi.getMyInviteCode(params)
                this.data=res.data
            } catch (e) {
                global.showErrorTip(e.msg, this)
            }
        }
    }
</script>

<style lang="less" scoped>
    .main {
        text-align: left;
        background: url("../../../assets/me/qrcode_bg.png") no-repeat;
        background-size: cover;
    }
.img-wrap{
    margin: 80px auto
}
    #imageWrapper {
        width: 400px;
        height: 400px;
        background: #fcc;
    }

    .code {

    }
</style>
