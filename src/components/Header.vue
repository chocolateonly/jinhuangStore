<template>
    <van-nav-bar
            :class="_className"
            :title="title"
            :left-arrow="hasLeftArrow"
            @click-left="onPressLeft"
            :border="hasBorder"
    >
        <template #right>
            <slot></slot>
        </template>
    </van-nav-bar>
</template>
<script>
    export default {
        name: 'Header',
        props: {
            title: {
                type: String,
                default: ''
            },
            _className: {
                type: String,
                default: ''
            },
            onPressLeft: {
                type: Function,
                default: () => null
            },
            hasBorder: {
                type: Boolean,
                default: true
            },
            hasLeftArrow: {
                type: Boolean,
                default: true
            }
        },
        methods: {}
    }
</script>
<style scoped lang="less">

</style>
