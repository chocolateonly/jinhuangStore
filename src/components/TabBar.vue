<template>
    <div>

        <van-tabbar v-model="active" class="tabbar">
            <van-tabbar-item push v-for="(v,i) in icons" :key="i" :to="v.to">
                <span>{{v.title}}</span>
                <template #icon="props">
                    <img :src="props.active ? v.active : v.inactive"/>
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
  export default {
    name: 'TabBar',
    data() {
      return {
        active: 0,
        icons: [{
          title: '首页',
          to: '/tab/home',
          active: 'https://img.yzcdn.cn/vant/user-active.png',
          inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
        }, {
          title: '资讯',
          to: '/tab/news',
          active: 'https://img.yzcdn.cn/vant/user-active.png',
          inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
        }, {
          title: '购置中心',
          to: '/tab/buyCenter',
          active: 'https://img.yzcdn.cn/vant/user-active.png',
          inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
        }, {
          title: '我的',
          to: '/tab/mine',
          active: 'https://img.yzcdn.cn/vant/user-active.png',
          inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
        }],
      }
    },
    methods: {
      setTab() {
        //console.log(this.$route.name)
        switch (this.$route.name) {
          case 'Home':
            return this.active = 0
          case 'News':
            return this.active = 1
          case 'BuyCenter':
            return this.active = 2
          case 'Mine':
            return this.active = 3
          default:
            return this.active = 0
        }
      }
    },
    created() {
      this.setTab()
    },
    watch: {
      $route(to) {
        //console.log(to)
        this.setTab(to)
      }
    }
  }
</script>

<style scoped>
    .van-tabbar {
        background: rgba(255, 255, 255, 1);
        /*box-shadow:0px 0px 14px 4px rgba(115,115,115,0.1);*/
    }

</style>
