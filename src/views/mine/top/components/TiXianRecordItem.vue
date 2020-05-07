<template>
    <div class="record-item">
        <div class="flexRow1 ai-center jc-sb" style="margin-bottom: 5px">
            <div class="no text-line-1">订单号：<span>{{v.account_no}}</span></div>
            <div class="state_text text-line-1"><span>{{v.state_text}}</span></div>
        </div>
        <div class="flexRow1 ai-center jc-sb">
            <div class="create_time text-line-1"><span>{{v.create_time}}</span></div>

            <div class="money text-line-1"><span>{{v.money}}</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TiXianRecordItem",
        props: {
            i: Number,
            v: Object,
            handleClick: {
                type: Function,
                default: () => null
            }
        },
    }
</script>

<style lang="less" scoped>
    .record-item {
        padding: 20px 0;
        border-bottom: 1px solid #eee;
        font-size: 28px;
    }

    .no {
        span {
            color: #ee343f
        }
    }

    .state_text {
        color: #00A381;
    }

    .create_time {
        color: #999999;
    }

    .type_text {
        color: #999999;
    }

    .money {
        color: #333;
    }
</style>
