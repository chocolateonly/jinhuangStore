<template>
    <div class="news flexCol1 flexGrow1">

        <div class="flexCol0">
            <img class="header-banner" src="../assets/news/news_banner.png" alt="">
            <Notice/>
        </div>

        <div class="tabs flexRow0">
            <div class="tab-item flexCol1 ai-center"
                 v-for="(v,i) in tabs" :key="i"
                 :class="{'active':activeTab===i}"
                 @click="activeTab=i"
            >
                <div class="tab-item-title">{{v}}</div>
            </div>
        </div>

        <!-- 新闻列表-->
        <div class="news-list flexGrow1 overflowY">

                <FlatListView :key="activeTab" :getList="(page,pageSize)=>getList(page,pageSize)">
                    <template scope="list">
                        <div class="item-wrapper" v-for="(v,i) in list.data" :key="i">
                        <NewsItem :v="v" :handle-click="goNewsDetails"/>
                        </div>
                    </template>
                </FlatListView>

        </div>

    </div>
</template>
<script>
  import Notice from "../components/Notice";
  import NewsItem from "./news/components/NewsItem";
  import FlatListView from "../components/FlatListView";
  import {setList} from '../utils'

  export default {
    name: 'News',
    components: {FlatListView, Notice, NewsItem},
    data() {
      return {
        tabs: ['公司新闻', '行业新闻'],
        activeTab: 0,
        news: [
          {
            id: 0,
            title: '这里是新闻标题新闻标题这里是新 闻标题新闻标题',
            tag: '新闻热点',
            createdTime: '2016-12-30',
            img: require('../assets/news/news-img.png')
          },
          {
            id: 1,
            title: '这里是新闻标题新闻标题这里是新 闻标题新闻标题',
            tag: '新闻热点',
            createdTime: '2016-12-30',
            img: require('../assets/news/news-img.png')
          },
          {
            id: 2,
            title: '这里是新闻标题新闻标题这里是新 闻标题新闻标题',
            tag: '新闻热点',
            createdTime: '2016-12-30',
            img: require('../assets/news/news-img.png')
          },
        ],

        total: 0,
        currentList: [
          {
            id: 0,
            title: '这里是新闻标题新闻标题这里是新 闻标题新闻标题',
            tag: '新闻热点',
            createdTime: '2016-12-30',
            img: require('../assets/news/news-img.png')
          },
        ]
      }
    },
    methods: {
      goNewsDetails(id){
        this.$router.push(`/newsDetails/${id}`)
      },
      async getList(page, pageSize) {
        return setList(page, pageSize, this.news[0])
      },
    }
  }
</script>
<style lang="less" scoped>
    .news {
        background: url("../assets/common/_bg.png") no-repeat;
        background-size: cover;
    }

    .header-banner {
        height: 400px
    }

    .tabs {
        width: 508px;
        margin: 10px auto;
    }

    .tab-item {
        width: 254px;
        height: 32px;
        font-size: 30px;
        font-weight: 400;
        color: rgba(78, 78, 78, 1);

        &.active {
            color: rgba(188, 2, 3, 1);
        }

        &.active:after {
            content: '';
            width: 59px;
            height: 6px;
            background: rgba(188, 2, 3, 1);
            border-radius: 2px;
            margin-top: 5px;
        }
    }

    .news-list {
        padding: 0 30px;
    }
</style>

