<template>
    <div class="bg flexCol1">
        <Header title="个人中心"
                _className="me-header header flexCol0"
                :hasBorder="false"
                :hasLeftArrow="false"></Header>

        <div class=" flexCol1 overflowY">
            <div class="content">

            </div>
        </div>

    </div>

</template>

<script>
    import Header from "../components/Header";

    export default {
        name: "Mine",
        components: {Header},
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="less" scoped>
    .bg {
        height: 100%;
        background: url("../assets/me/me_bg.png") no-repeat;
        background-size: cover;
    }

   #app .me-header {
        background: transparent;

        .van-nav-bar__title {
            color: #fff;
        }
    }

    .content {
        padding: 0.4rem;
        font-size: 0.4rem;
    }
</style>
