<template>
  <van-nav-bar
          :class="_className"
          :title="title"
          left-arrow
          @click-left="onPressLeft"
  />
</template>
<script>
    export default {
      name:'Header',
      props:{
        title:{
          type:String,
          default: ''
        },
        _className: {
          type: String,
          default: ''
        },
        onPressLeft:{
          type:Function,
          default:()=>null
        }
      },
      methods:{
      }
    }
</script>
<style scoped lang="less">

</style>
