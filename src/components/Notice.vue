<template>
    <van-notice-bar class="notice" left-icon="volume-o" mode="closeable" :scrollable="true">
        这里是商城平台公告通知
    </van-notice-bar>
</template>

<script>
    export default {
        name: "Notice"
    }
</script>

<style scoped>
  .notice{
      margin: 0 60px;
      background: #fff;
      height: 40px;
      border-radius: 40px;
      padding: 20px;
      margin-top: -40px;
  }
</style>
