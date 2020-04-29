<template>
    <div class="bg flexCol1">

        <Header title="购物车" _className="header flexCol0 clearBorder" :on-press-left="goBack"></Header>

        <div class=" flexCol1 overflowY">
            <div class="content">

            </div>
        </div>

    </div>

</template>

<script>
    import Header from "../../components/Header";
    export default {
        name: "ShoppingCart",
        components: {Header},
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .bg {
        height: 100%;
        background: url("../../assets/common/bg.png") no-repeat;
        background-size: cover;
    }

    .content {
        padding: 0.4rem;
        font-size: 0.4rem;
    }
</style>
