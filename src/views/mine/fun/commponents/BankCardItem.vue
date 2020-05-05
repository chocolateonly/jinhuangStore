<template>
    <div class="bankcard-item">
        <div class="flexRow0 ai-center">
        <img :src="v.img" alt="">

        <div class="content-wrapper flexGrow1 flexCol1 jc-sb">

                    <div class="user">{{v.name}}</div>
                    <div class="create">{{v.type}}</div>

        </div>
        </div>

        <div class="bankcard-num">
            {{v.number}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "BankCardItem",
        props: {
            i: Number,
            v: Object,
            handleClick: {
                type: Function,
                default: () => null
            }
        }
    }
</script>

<style lang="less" scoped>
    .bankcard-item {
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
</style>
