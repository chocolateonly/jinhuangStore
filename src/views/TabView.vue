<template>
    <div>
      <van-tabbar  v-model="active" class="tabbar">
          <van-tabbar-item replace v-for="(v,i) in icons" :key="i" :to="v.to" >
              <span>{{v.title}}</span>
              <template #icon="props">
                  <img :src="props.active ? v.active : v.inactive" />
              </template>
          </van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
    export default {
      name:'TabView',
        data() {
            return {
                active: 0,
                icons: [{
                    title:'首页',
                    to:'/home',
                    active: 'https://img.yzcdn.cn/vant/user-active.png',
                    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
                },{
                    title:'资讯',
                    to:'/news',
                    active: 'https://img.yzcdn.cn/vant/user-active.png',
                    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
                },{
                    title:'购置中心',
                    to:'/buycenter',
                    active: 'https://img.yzcdn.cn/vant/user-active.png',
                    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
                },{
                    title:'我的',
                    to:'/mine',
                    active: 'https://img.yzcdn.cn/vant/user-active.png',
                    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
                }],
            }
        },
    }
</script>

<style scoped>
    .van-tabbar{
        background:rgba(255,255,255,1);
        /*box-shadow:0px 0px 14px 4px rgba(115,115,115,0.1);*/
    }

</style>
