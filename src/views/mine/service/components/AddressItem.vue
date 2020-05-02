<template>
    <div class="address-item" @click="handleClick">
        <div class="flexRow0 ai-center jc-sb">
            <div class="name">{{v.name}}</div>
            <div class="mobile">{{v.mobile}}</div>
        </div>

        <div class="address">{{v.address}}</div>

        <div class="flexRow0 ai-center  jc-sb">
            <div class="default-wrap">
                <div class="default">默认</div>
            </div>
            <div class="right-btn">
                <div class="btn">
                    <img src="./../../../../assets/me/icon_edit.png" alt=""><span>编辑</span>
                </div>
                <div class="btn">
                    <img src="./../../../../assets/me/icon_delete.png" alt=""><span>删除</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "AddressItem",
    props:{
      i: Number,
      v: Object,
      handleClick: {
        type: Function,
        default: () => null
      }
    }
  }
</script>

<style lang="less" scoped>
.address-item{
    padding: 20px;
    background: #fff;
}
</style>