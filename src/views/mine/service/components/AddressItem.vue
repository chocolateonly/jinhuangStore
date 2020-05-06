<template>
    <div class="address-item" @click="handleClick">
        <div class="flexRow0 ai-center jc-sb">
            <div class="name">{{v.name}}</div>
            <div class="mobile">{{v.phone}}</div>
        </div>

        <div class="address">{{v.address}}</div>

        <div class="flexRow1 flexGrow1 ai-center  jc-sb">

            <div class="default-wrap">
                <div class="default " v-show="v.is_default==='2'">默认</div>
            </div>

            <div class="right-btn  ai-center">
                <div class="btn flexRow1 ai-center"  @click="goAddOrUpdateAddress">
                    <span>编辑</span><img src="./../../../../assets/me/icon_edit.png" alt="">
                </div>
                <div class="btn flexRow1 ai-center" @click="deleteAddress">
                    <span>删除</span><img src="./../../../../assets/me/icon_delete.png" alt="">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  import {serviceApi} from "../../../../services/apis";
  import global from "../../../../components/global";

  export default {
    name: "AddressItem",
    props:{
      i: Number,
      v: Object,
      handleClick: {
        type: Function,
        default: () => null
      }
    },
      methods:{
          goAddOrUpdateAddress(){
              this.$router.push(`/addOrUpdateAddress/${this.v.id}`)
          },
          async deleteAddress(){

              try {
                  await serviceApi.deleteAddress({id:this.v.id,hasToken: true})
                  this.$router.go(0)

              } catch (e) {
                  global.showErrorTip(e.msg, this)
              }
          }
      }
  }
</script>

<style lang="less" scoped>
.address-item{
    padding: 20px;
    background: #fff;
    margin-bottom: 20px;
    .address{
        text-align: left;
        padding: 20px 0;
        margin: 10px 0;
        border-top: 1px solid #eee;
    }
    .default{
        color: #BC0203;
    }
    .right-btn{
        display: flex;
        flex-direction: row;
      .btn{
          margin-left: 20px;
          img{
              width: 44px;
              height: 44px;
          }
      }
    }
}
</style>
