<template>
  <div class="em-header">
    <div class="em-header-button is-left" @click="goBack"> <i class="fa fa-calendar-alt" ></i></div>
    <h3 class="em-header-title">{{title}}</h3>
    <div class="em-header-button is-right"><i class="fa fa-calendar-alt"></i></div>
  </div>
</template>
<script>
    export default {
      name:'Header',
      props:{
        title:String
      },
      methods:{
        goBack(){
          this.$router.go(-1)
        }
      }
    }
</script>
<style scoped lang="less">
   .fa{
     font-size: 40px;
   }
    .em-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 200px;
        padding: 0 1rem;
        background: #2088fd;
        color: #fff;
        .em-header-button{
            .is-left{
                text-align: left;
            }
            .is-right{
                text-align: right;
            }
        }
        .em-header-title{
            font-weight: normal;
        }
    }
</style>
