<template>
    <div class="welcome" >
        <img v-if="true" :src="img" alt="">
        <img v-else src="../assets/welcome/qdy.png" alt="">
    </div>
</template>

<script>
    import global from "../components/global";
    import {serviceApi} from "../services/apis";
    import {StorageKey} from "../utils";

    export default {
        name: 'Welcome',
        data() {
            return {
                timer: null,
                img:''
            }
        },
        methods: {},
        async beforeCreate() {
            try {
                const res=await serviceApi.getSplash({type:2})
                this.img=res.data.list[0].image
            } catch (e) {
                global.showErrorTip(e.msg, this)
            }
        },
        mounted() {
            this.timer = setTimeout(async () => {
              let data=await localStorage.getItem(StorageKey)
              data=JSON.parse(data)
              //alert(data)
console.log(data&&data.token)
                if (data&&data.token){
                    this.$router.push('/tab/home')
                }
               else this.$router.push('/login')
            }, 2000)
        },
        destroyed() {
            console.log('destroyed')
          clearInterval(this.timer)
        }
    }
</script>

<style lang="less" scoped>
    .welcome {
        position: relative;
        width: 100%;
        height: 100%;
/*        background: url("../assets/welcome/qdy.png") no-repeat;
        background-size: cover;*/
    }
    img{
        position: absolute;
        top: 0;
        bottom: 0;
        right:0;
        left:0;
        width: 100%;
        height: 100%;
    }
</style>
