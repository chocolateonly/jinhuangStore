<template>
    <div class="bg flexCol1">

        <Header title="全部评论" _className="header  clearBorder" :on-press-left="goBack"></Header>

        <div class=" flexCol1 overflowY">
            <div class="content">
                <FlatListView :getList="(page,pageSize)=>getList(page,pageSize)">
                    <template scope="list">
                <div v-for="(v,i) in list.data" :key="i">
                    <CommentItem :v="v" :i="i"/>
                </div>
                    </template>
                </FlatListView>
            </div>
        </div>

    </div>
</template>

<script>
    import CommentItem from "./components/CommentItem";
    import Header from "../../components/Header";
    import {serviceApi} from "../../services/apis";
    import global from "../../components/global";
    import FlatListView from "../../components/flatListView/FlatListView";

    export default {
        name: "Comment",
        components: {FlatListView, Header, CommentItem},
        data() {
            return {
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            async getList(page) {
                const params={
                    page:page,
                    id:this.$route.params.id
                }

                try {
                    const res=await  serviceApi.getAllComments(params)
                    return {total:res.data.count,list:res.data.data}
                }catch (e) {
                    global.showErrorTip(e.msg,this)
                }


            },
        },
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
