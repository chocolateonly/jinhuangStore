<template>
    <div class="record-item">
        <div class="flexRow1 ai-center jc-sb">
            <div class="no">订单号：<span>{{v.no}}</span></div>
            <div class="state_text"><span>{{v.state_text}}</span></div>
        </div>
        <div class="flexRow1 ai-center jc-sb">
            <div class="create_time"><span>{{v.create_time}}</span></div>
            <div class="type_text"><span>{{v.type_text}}</span></div>
            <div class="money"><span>{{v.money}}</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecordItem",
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
            color: #90130B
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
