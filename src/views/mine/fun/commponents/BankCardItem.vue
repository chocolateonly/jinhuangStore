<template>
    <div class="bankcard-item" >
        <div class="flexRow0 ai-center">
        <img :src="v.icon" alt="">

        <div class="content-wrapper flexGrow1 flexRow1 jc-sb">
                    <div class="user">{{v.name}}</div>
                    <div class="create" @click="deleteCard">删除</div>
        </div>

        </div>

        <div class="bankcard-num">
            {{v.account_no}}
        </div>

<!--        <img class="bg" :src="v.image" alt="">-->
    </div>
</template>

<script>
    import {serviceApi} from "../../../../services/apis";
    import global from "../../../../components/global";

    export default {
        name: "BankCardItem",
        props: {
            i: Number,
            v: Object,
            handleClick: {
                type: Function,
                default: () => null
            }
        },
        methods:{
            async deleteCard(){
                try {
                   await serviceApi.deleteBankAccount({hasToken:true,id:this.v.id})
                    this.$router.go(0)
                }catch (e) {
                    global.showErrorTip(e.msg,this)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .bankcard-item {
        position: relative;
        color: #fff;
        padding:20px;
        margin-bottom: 40px;
        background:linear-gradient(-90deg,rgba(244,77,112,1),rgba(250,84,84,1));
        border-radius:8px;

        img {
            width: 90px;
            height: 90px;
            border-radius: 45px;
        }
    }

    .content-wrapper {
        text-align: left;
        margin-left: 10px;

        .user {
            color: #fff;
        }

        .create {
            color: #fff;
            font-size: 20px;
        }

    }
    .bankcard-num{
        margin-top: 20px;
        font-size: 36px;
        text-align: center;

    }
    .bg{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
    }
</style>
