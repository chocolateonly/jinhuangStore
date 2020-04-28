export default {
    loading(that) {
        that.$toast.loading({
            message: '加载中...',
            forbidClick: true,
            loadingType: 'spinner',
            duration: 0  //一直显示
        })
    },
    clearLoading(that) {
        that.$toast.clear()
    },
    showErrorTip(errMsg = '', that) {
        that.$dialog.alert({
            title: '错误',
            message: errMsg,
        }).then(() => {
            // on close
            console.log('close')
        });
    },
    goBack:(that)=> {
        that.$router.go(-1)
    },
}
