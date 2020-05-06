<template>
    <div class="bg flexCol1">
        <Header title="新闻详情" _className="header flexCol0 clearBorder" :on-press-left="goBack"></Header>

        <div class=" flexCol1 overflowY">
            <div class="content">
                <div class="title">{{details.title}}</div>

                <div class="user-info flexRow0 jc-sb ai-center">
                    <div class="user flexRow0 ai-center flexGrow1">

                        <img :src="details.cover" alt="">

                        <div class="name text-line-1">{{details.nickname}}</div>
                    </div>
                    <div class="create">发布于：{{details.create_time}}</div>
                </div>

                <div class="details-content" v-html="details.content"></div>
            </div>
        </div>

    </div>

</template>

<script>
    import Header from "../../components/Header";
    import {serviceApi} from "../../services/apis";
    import global from "../../components/global";

    export default {
        name: "NewsDetails",
        components: {Header},
        data() {
            return {
                details: {
                    title: '今日话题193:与pk 你支持谁?',
                    img: require('../../assets/common/user_logo.png'),
                    name: '模拟数模拟数据模拟数据模拟数据据',
                    createTime: '2019-10-23',
                    content: `<p>在短视频领域的纠葛还未结束,战火便迅速烧到了其他领域。昨日晚间,因为新华网一篇名为《多少道文件才能管住网游对少年儿童的戕害》的文章,让双方大战...</p>
                                <img src="../../assets/common/user_logo.png" alt="">
                                <p>在短视频领域的纠葛还未结束,战火便迅速烧到了其他领域。昨日晚间,因为新华网一篇名为《多少道文件才能管住网游对少年儿童的戕害》的文章,让双方大战...</p>
                                `
                }
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        },
       async mounted() {
            const params={
                id:this.$route.params.id,
                hasToken:true
            }
           try {
               const res=await  serviceApi.getNewsDetails(params)
               this.details=res.data
           }catch (e) {
               global.showErrorTip(e.msg,this)
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

        .title {
            font-size: 36px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
        }

        .user {
            img {
                width: 80px;
                height: 80px;
                border-radius: 40px;
                background: #fcc;
            }

            .name {
                margin: 0 10px;
                font-size: 26px;
                color: #333;
            }
        }

        .create {
            font-size: 26px;
            color: #999999;
        }

        .details-content {
            text-align: left;
            font-size: 24px;
            color: rgba(153, 153, 153, 1);
        }
    }

</style>
