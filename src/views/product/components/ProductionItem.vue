<template>
    <div class="production" :class="i%2===0?'mr':'ml'" @click="handleClick">
        <div class="img-wrap">
        <img class="p-img" :src="v.image" alt="">
        </div>

        <div class="content text-line-2">
            {{v.name}}
        </div>

        <div class="p-bottom flexRow1 jc-sb ai-center">
            <div class="money  text-line-1">￥ {{v.price}}</div>
            <div class="shoppingCart">
                <img src="../../../assets/home/icon_buycar.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductionItem",
        props: {
            i:Number,
            v: Object,
            handleClick: Function
        }
    }
</script>

<style lang="less" scoped>

    .production {
        margin-bottom: 20px;
        overflow: hidden;
        background: rgba(255, 255, 255, 1);
        border: 4px solid;
        border-image: linear-gradient(-45deg, rgba(163, 93, 9, 1), rgba(251, 216, 173, 1), rgba(140, 78, 3, 1), rgba(251, 220, 179, 1)) 4 4;
        border-radius: 8px 10px 10px 10px;

        &.ml {
            margin-left: 10px;
        }

        &.mr {
            margin-right: 10px;
        }

        .content {
            font-size: 14px;
            text-align: left;
            margin: 6px;
            font-weight: 400;
            height: 1rem;
            line-height: 0.5rem;
        }

        .p-bottom {
            font-size: 28px;
            padding: 6px;

            .money {
                color: #FF204A;
            }
        }
        .img-wrap{
            width: 100%;
            height: 331px; //图片高度
            background: #fcc;
        }
        .p-img {
            height: 331px; //图片高度
        }

        .shoppingCart img {
            width: 50px;
            height: 50px;
        }
    }
</style>
