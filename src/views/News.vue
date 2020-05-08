<template>
    <div class="news flexCol1 flexGrow1">

        <div class="">
           <!-- <img class="header-banner" src="../assets/news/news_banner.png" alt="">-->
            <div>
                <Swiper :images="images"/>
            </div>

            <Notice :data="notice"/>
        </div>

<!--        <div class="tabs flexRow0 jc-center" style="overflow-x: auto">
            <div class="tab-item ai-center"
                 style="min-width: 200px"
                 v-for="(v,i) in tabs" :key="i"
                 :class="{'active':activeTab===v.id}"
                 @click="activeTab=v.id"
            >
                <div class="tab-item-title">{{v.name}}</div>
            </div>
        </div>-->

        <van-tabs class="tabs" v-model="activeTab" background="transparent" @click="selectTab" >
            <van-tab class="tab"  v-for="(v,i) in tabs" :key="i" :title="v.name"  >
            </van-tab>
        </van-tabs>

        <!-- 新闻列表-->
        <div class="news-list flexGrow1 overflowY">

                <FlatListView :key="activeTab" :getList="(page,pageSize)=>getList(page,pageSize)">
                    <template scope="list">
                        <div class="item-wrapper" v-for="(v,i) in list.data" :key="i">
                        <NewsItem :v="v" :handle-click="()=>goNewsDetails(v.id)"/>
                        </div>
                    </template>
                </FlatListView>

        </div>

    </div>
</template>
<script>
  import Notice from "../components/Notice";
  import NewsItem from "./news/components/NewsItem";
  import FlatListView from "../components/flatListView/FlatListView";
  import {serviceApi} from "../services/apis";
  import global from "../components/global";
  import Swiper from "../components/Swiper";

  export default {
    name: 'News',
    components: {Swiper, FlatListView, Notice, NewsItem},
    data() {
      return {
        tabs: [],
        activeTab: 0,
          notice:{},
          images:[]
      }
    },
    methods: {
      goNewsDetails(id){
        this.$router.push(`/newsDetails/${id}`)
      },
        selectTab(id){
            this.activeTab=id
        },
      async getList(page) {
          const params={
              page:page,
              cls_id: this.tabs.length>0?this.tabs[this.activeTab].id:0,
              hasToken:true
          }

          try {
              const res=await  serviceApi.getNewsList(params)
              this.tabs=res.data.aclist
              this.notice=res.data.notice
              return {total:res.data.count,list:res.data.list}
          }catch (e) {
              global.showErrorTip(e.msg,this)
          }

      },
    },
      async beforeCreate() {
          try {
              //基础数据
              const res=await serviceApi.getHomeData({hasToken:true})
              this.data={...this.data,...res.data}
              this.images=res.data.sliderlist.reduce((acc,cur)=>{
                  acc.push({...cur,image:cur.cover})
                  return acc
              },[])
          }catch (e) {
              global.showErrorTip(e.msg, this)
          }
      },
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
        margin: 10px auto;
      // .tab{background: transparent;}
    }

 /*   .tab-item {
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
    }*/

    .news-list {
        padding: 0 30px;
    }
</style>

