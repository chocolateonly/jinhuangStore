<template>
    <div class="bg flexCol1">
        <Header title="新闻详情" _className="header  clearBorder" :on-press-left="goBack"></Header>

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
                details: {}
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        },
       async beforeCreate() {
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
