<template>
    <div style="margin: 20px auto 0 auto;display: flex;">
        <FullButton :title="title" :onClick="onClick" />
    </div>
</template>

<script>
    import FullButton from "./FullButton";
    export default {
        name: "PageBtn",
        components: {FullButton},
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
</style>
