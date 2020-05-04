<template>
    <Layout title="我的二维码" :go-back="goBack">
        <div class="main">
            <img id="imageWrapper" src="https://img.yzcdn.cn/vant/leaf.jpg" alt="">
            <button @click="toSave">保存图片</button>
        </div>
    </Layout>

</template>

<script>
    import Layout from "../../../components/Layout";
    import html2canvas from 'html2canvas'

    export default {
        name: "MyQrCode",
        components: {Layout},
        data() {
            return {}
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            //点击保存
            toSave() {
                html2canvas(document.getElementById("imageWrapper")).then(canvas => {
                    console.log(canvas)
                    let saveUrl = canvas.toDataURL('image/png')
                    let aLink = document.createElement('a')
                    let blob = this.base64ToBlob(saveUrl)
                    let evt = document.createEvent('HTMLEvents')
                    evt.initEvent('click', true, true)
                    aLink.download = '二维码.jpg'
                    aLink.href = URL.createObjectURL(blob)
                    aLink.click()
                });
            },
            //这里把图片转base64
            base64ToBlob(code) {
                let parts = code.split(';base64,')
                let contentType = parts[0].split(':')[1]
                let raw = window.atob(parts[1])
                let rawLength = raw.length
                let uInt8Array = new Uint8Array(rawLength)
                for (let i = 0; i < rawLength; ++i) {
                    uInt8Array[i] = raw.charCodeAt(i)
                }
                return new Blob([uInt8Array], {type: contentType})
            },
        },
    }
</script>

<style lang="less" scoped>
    .main {
        text-align: left;
    }

</style>
