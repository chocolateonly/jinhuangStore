<template>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
                v-model="loading"
                :finished="finished"
                :finished-text="finished&&list.length>0?'没有更多了':''"
                @load="onLoad"
        >

            <slot v-if="list.length>0||loading" :data="list"></slot>

            <van-empty v-else description="没有数据" />

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
        this.page = 1;
        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.onLoad();
      },
      async onLoad() {

        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        if (this.page===1){
            this.list=[]
        }

        if (this.loading) {
          const {total=0, list=[]} = await this.getList(this.page, this.pageSize)||{}
          this.list.push(...list)
          this.total = total
          this.loading = false
          this.page++
          console.log(this.page,this.list.length, total)
          if (this.list.length >= total) {
            this.finished = true;
          }

        }
      },
    }

  }
</script>

<style scoped>

</style>
