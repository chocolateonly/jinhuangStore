<template>
    <button class="full_btn" :class="_className" @click="onClick">
        {{title}}
    </button>
</template>

<script>
    export default {
        name: "FullButton",
        props: {
            title: {
                type: String,
                default: '登 录'
            },
            onClick: {
                type: Function,
                default: () => null
            },
            _className: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="less" scoped>
    .full_btn {
        width: 100%;
        height: 89px;
        background: url("../assets/common/full_btn.png") no-repeat;
        background-size: contain;
        color: #fff;
        font-size: 32px;
        margin-bottom: 32px;

        &:hover {
            opacity: 0.8;
        }
    }
</style>
