<template>
    <div class="bg flexCol1">

        <Header title="收货地址" _className="header flexCol0 clearBorder"
                :on-press-left="goBack">
            <div>添加</div>
        </Header>

        <div class=" flexCol1 overflowY">
            <div class="content">
        <FlatListView  :getList="(page,pageSize)=>getList(page,pageSize)">
            <template scope="list">
                <div class="test--">
                    <div v-for="(v,i) in list.data" :key="i">
                        <AddressItem  :v="v" :i="i" :handle-click="onSelected" />
                    </div>
                </div>
            </template>
        </FlatListView>

            </div>
        </div>
    </div>

</template>

<script>
  import FlatListView from "../../../components/flatListView/FlatListView";
  import {setList} from "../../../components/flatListView";
  import AddressItem from "./components/AddressItem";
  import Header from "../../../components/Header";

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
      getList(page,pageSize){
        return setList(page,pageSize,{
          id:'1',
          name:'zhangsan',
          mobile:'12345646',
          address:'武汉市武汉市武汉市武汉市武汉市武汉市',
          isDefault:true
        })
      },
      onSelected(){

      },

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

</style>
