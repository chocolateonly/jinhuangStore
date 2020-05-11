<template>
    <div class="comment-item flexRow0">
        <img v-if="v.avatar" :src="v.avatar" alt="">
        <img v-else src="../../../assets/common/user_logo.png" alt="">

        <div class="content-wrapper flexGrow1">
            <div class="flexRow1 jc-sb">
                <div class="flexGrow1">
                    <div class="user">{{v.nickname}}</div>
                    <div class="create">{{v.create_time}}</div>
                </div>

                <div class="xx">
                    <img src="../../../assets/common/icon_star_active.png" alt=""
                         v-for="(item,i) in [1,1,1,1,1]" v-show="i<v.star" :key="i">
                </div>
            </div>

            <div class="cm-content">{{v.content}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommentItem",
        props: {
            i: Number,
            v: Object,
            handleClick: {
                type: Function,
                default: () => null
            }
        }
    }
</script>

<style lang="less" scoped>
    .comment-item {
        border-bottom: 1px solid #eee;
        padding: 20px 0;

        img {
            width: 90px;
            height: 90px;
            border-radius: 45px;
        }
    }

    .content-wrapper {
        text-align: left;
        margin-left: 10px;

        .user {
            color: #7B889B;
        }

        .create {
            color: #999;
            font-size: 20px;
        }

        .xx img {
            width: 40px;
            height: 40px;
        }
    }
</style>
