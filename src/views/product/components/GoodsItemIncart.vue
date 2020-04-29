<template>
    <div class="goods-item flexRow0 flexGrow1 ai-center">

        <div>
            <van-checkbox v-model="v.selected" checked-color="#BC0203" @change="onSelected"/>
        </div>

        <div class="p-img">
            <img src="../../../assets/common/user_logo.png" alt="">
        </div>

        <div class="content-wrapper flexCol1 flexGrow1  jc-sb text-left">

            <div class="flexGrow1">
                <div class="user  text-line-1">{{v.title}}</div>
                <div class="summary">{{v.summary}}</div>
            </div>

            <van-stepper v-model="v.number" min="1" max="8" @change="onChangeNumber"/>
        </div>

        <div class="delete-icon">
            <van-icon name="delete" size="20px" @click="onDelete"/>
        </div>

    </div>
</template>

<script>
    export default {
        name: "GoodsItemInCart",
        props: {
            i: Number,
            v: Object,
            handleClick: {
                type: Function,
                default: () => null
            },
            onSelected: {
                type: Function,
                default: () => null
            },
            onChangeNumber: {
                type: Function,
                default: () => null
            },
            onDelete: {
                type: Function,
                default: () => null
            },
        }
    }
</script>

<style lang="less" scoped>
    .goods-item {
        padding: 20px 0;
        border-bottom: 1px solid #eee;
        height: 200px;
    }

    .p-img {
        display: block;
        width: 200px;
        height: 200px;
        margin: 0 20px;
        background: #fcc;

        img {
            width: 200px;
            height: 200px;
        }
    }

    .user {
        font-size: 28px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
    }

    .summary {
        font-size: 24px;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
    }
</style>
