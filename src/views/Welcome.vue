<template>
    <div class="welcome"></div>
</template>

<script>
    export default {
        name:'Welcome',
        data() {
            return {
                timer: null
            }
        },
        methods: {

        },

        created() {
            this.timer=setTimeout(()=>{
              this.$router.push('/tab/home')
            },2000)
        },
        destroyed() {
            console.log('destroyed')
        }
    }
</script>

<style lang="less">
    .welcome {
        width:100%;
        height:100%;
        background: url("../assets/welcome/qdy.png") no-repeat;
        background-size:cover;
    }
</style>
