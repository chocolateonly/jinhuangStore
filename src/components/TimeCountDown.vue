<template>
    <van-count-down :time="time" @finish="onFinish">
        <template v-slot="timeData">
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
        </template>
    </van-count-down>
</template>

<script>
    export default {
        name: "TimeCountDown",
        props:{
          onFinish:{
              type:Function,
              default:()=>null
          }
        },
        data() {
            return {
                time: 15 * 60 * 1000,  //毫秒单位
            }
        },
    }
</script>

<style scoped>
    .colon {
        display: inline-block;
        margin: 0 4px;
    }

    .block {
        width: 32px;
        height: 32px;
        background: rgba(51, 51, 51, 1);
        border-radius: 4px;
        color: #fff;
        display: inline-block;
        padding: 6px;
    }
</style>
