<template>
    <div >
    <van-notice-bar class="notice"  left-icon="volume-o" mode="closeable" :scrollable="true">
        {{data.title}}
    </van-notice-bar>
    </div>
</template>

<script>
    export default {
        name: "Notice",
        props: {
            data:Object,
        },
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
