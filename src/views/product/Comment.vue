<template>
    <div class="bg flexCol1">

        <Header title="全部评论" _className="header flexCol0 clearBorder" :on-press-left="goBack"></Header>

        <div class=" flexCol1 overflowY">
            <div class="content">
                <div v-for="(v,i) in data" :key="i">
                    <CommentItem :v="v" :i="i"/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import CommentItem from "./components/CommentItem";
    import Header from "../../components/Header";

    export default {
        name: "Comment",
        components: {Header, CommentItem},
        data() {
            return {
                data: [
                    {
                        user: '小君',
                        content: '太棒了，产品很好 拷贝',
                        star: 4,
                        createdTime: '2019-4-23',
                    },
                    {
                        user: '小君',
                        content: '太棒了，产品很好 拷贝',
                        star: 4,
                        createdTime: '2019-4-23',
                    },
                ]
            }
        },
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
        background: url("../../assets/common/_bg.png") no-repeat;
        background-size: cover;
    }

    .content {
        padding: 0.4rem;
        font-size: 0.4rem;
    }
</style>
