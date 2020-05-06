<template>
    <div class="news-item flexRow0" @click="handleClick">
        <div class="img-wrap">
            <img :src="v.cover" alt="">
        </div>

        <div class="content-wrapper flexGrow1">
            <div class="flexCol1 flexGrow1 jc-sb">
                <div class="title text-line-2">{{v.title}}</div>
                <div class="create">
                    <span class="tag">{{v.desc}}</span>
                    <span class="createdTime">{{v.created_time}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "NewsItem",
    props: {
      i: Number,
      v: Object,
      handleClick: {
        type: Function,
        default: () => null
      }
    },
    mounted() {
      // console.log('item--')
      // console.log(this.v)
    }
  }
</script>

<style lang="less" scoped>
    .news-item {
        border-bottom: 1px solid #eee;
        padding: 20px 0;
        height: 160px;
        overflow: hidden;
        .img-wrap{

            width: 250px;
            height: 160px;
            border-radius: 10px;
            background: #fcc;
            img {
                width: 250px;
                height: 160px;
                border-radius: 10px;
                display: block;
                margin-right:10px;
            }
        }

    }

    .content-wrapper {
        text-align: left;
        margin-left: 10px;

        .title {
            font-size: 24px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
        }

        .create {
            color: #999;
            font-size: 20px;
            .tag {
                margin-right: 10px;
            }
        }
    }
</style>
