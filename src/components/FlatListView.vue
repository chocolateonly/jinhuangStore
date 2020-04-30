<template>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >

            <div class="item-wrapper " v-for="(v,i) in list" :key="i">
                <slot :data="v"></slot>
            </div>

        </van-list>
    </van-pull-refresh>
</template>

<script>
    export default {
        name: "FlatListView",
        props: {
            /*          item:{
                          type:Object,
                          default:{}
                      },*/
            getList: {
                type: Function,
                default: () => null
            }
        },
        data() {
            return {
                list: [],
                total: 0,
                loading: false,
                finished: false,
                refreshing: false,
                page: 1,
                pageSize: 5
            }
        },
        methods: {
            onRefresh() {
                // 清空列表数据
                this.finished = false;

                // 重新加载数据
                // 将 loading 设置为 true，表示处于加载状态
                this.loading = true;
                this.onLoad();
            },
             onLoad() {

                 setTimeout(() => {
                     if (this.refreshing) {
                         this.list = [];
                         this.refreshing = false;
                     }

                     for (let i = 0; i < 10; i++) {
                         this.list.push(
                             {id:0,title:'这里是新闻标题新闻标题这里是新 闻标题新闻标题',
                                 tag:'新闻热点',createdTime:'2016-12-30',
                                 img:require('../assets/news/news-img.png')},
                         );
                     }
                     this.loading = false;
console.log(this.list.length)
                     if (this.list.length >= 40) {
                         this.finished = true;
                     }
                 }, 1000);


                 /*              if (this.refreshing) {
                                   this.list = [];
                                   this.refreshing = false;
                               }

                               if (this.loading) {




               /!*                    const {total, list} =  this.getList(this.page, this.pageSize)
                                   this.list.push(...list)
                                   this.total = total
                                   this.loading = false
                                   this.page++
                                   console.log(this.list.length, total)
                                   if (this.list.length >= total) {
                                       this.finished = true;
                                   }*!/

                               }*/
            },
        }

    }
</script>

<style scoped>

</style>
