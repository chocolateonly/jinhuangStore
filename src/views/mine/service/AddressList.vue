<template>
    <div class="bg flexCol1">

        <Header title="收货地址" _className="header  clearBorder"
                :on-press-left="goBack">
            <div class="header-right-btn" @click="goAddOrUpdateAddress">添加</div>
        </Header>

        <div class=" flexCol1 overflowY">
            <div class="content">
        <FlatListView  :getList="(page,pageSize)=>getList(page,pageSize)">
            <template scope="list">
                    <div v-for="(v,i) in list.data" :key="i">
                        <AddressItem  :v="v" :i="i" :handle-click="onSelected" />
                    </div>
            </template>
        </FlatListView>

            </div>
        </div>
    </div>

</template>

<script>
  import FlatListView from "../../../components/flatListView/FlatListView";
  import AddressItem from "./components/AddressItem";
  import Header from "../../../components/Header";
  import {serviceApi} from "../../../services/apis";
  import global from "../../../components/global";

  export default {
    name: "AddressList",
    components: {Header, AddressItem, FlatListView},
    data() {
      return {

      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      async getList() {
          const params={
              hasToken:true
          }

          try {
              const res=await  serviceApi.getAddressList(params)
              return {total:res.data.length,list:res.data}
          }catch (e) {
              global.showErrorTip(e.msg,this)
          }
      },
      onSelected(){

      },
        goAddOrUpdateAddress(){
            this.$router.push(`/addOrUpdateAddress/add`)
        }

    }
  }
</script>

<style lang="less" scoped>
    .bg {
        height: 100%;
        background: url("../../../assets/common/_bg.png") no-repeat;
        background-size: cover;
    }

    .content {
        padding: 30px;
        font-size: 30px;
    }
.header-right-btn{
    color: #fff;
}
</style>
