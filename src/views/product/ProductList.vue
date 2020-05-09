<template>
    <div class="product-list flexCol1">
        <div class="pl-header ">

            <Header title="全部商品" _className="header" :hasBorder="false" :on-press-left="goBack"/>

            <div class="tabs flexRow1  ai-center">
                <div class="tab-item flexRow1 jc-center"
                     v-for="(v,i) in tabs" :key="i"
                     :class="{'active':$route.params.id===v.id}"
                     @click="setActiveTab(v.id)">
                    {{v.name}}
                </div>
            </div>

<!--            <van-tabs class="tabs" v-model="activeTab" background="transparent"
                      title-inactive-color="#fff" title-active-color="#fff"
                      color="#fff"  :border="false" @click="(name,title)=>setActiveTab(name,title)">
                <van-tab class="tab"  v-for="(v,i) in tabs" :key="i" :title="v.name" >
                </van-tab>
            </van-tabs>-->


        </div>
        <div class="content flexCol1 overflowY">
            <div>
                <FlatListView :key="activeTab" :getList="(page,pageSize)=>getList(page,pageSize)">
                    <template scope="list">
                        <div class="productions flexRow1">
                        <div class="production-wrapper" v-for="(v,i) in list.data" :key="i">
                        <ProductionItem :v="v" :i="i" :handleClick="()=>goProductionDetails(v)"/>
                        </div>
                        </div>
                    </template>
                </FlatListView>
            </div>
        </div>
    </div>
</template>

<script>
  import Header from "../../components/Header";
  import ProductionItem from "./components/ProductionItem";
  import FlatListView from "../../components/flatListView/FlatListView";
 import global from "../../components/global";
  import {serviceApi} from "../../services/apis";
  export default {
    name: "ProductList",
    data() {
      return {
        tabs: [],
        activeTab: 0
      }
    },
    components: {FlatListView, Header, ProductionItem},
    methods: {
      setActiveTab(name,title) {
          console.log('ii')
          console.log(name,title)
        //this.activeTab = i
        //this.$router.push(`/productionList/${i}`)
      },
      goBack() {
        this.$router.go(-1)
      },
      goProductionDetails(item) {
        this.$router.push(`/productionDetails/${item.id}`)
      },
      async getList(page) {
        const params={
            page:page,
            pt_id:this.activeTab
        }

        try {
         const res=await  serviceApi.getAllProducts(params)
            this.tabs=[...res.data.ptlist,...res.data.ptlist]
            return {total:res.data.count,list:res.data.data}
        }catch (e) {
            global.showErrorTip(e.msg,this)
        }
      },
    },
     async beforeMount() {
         this.activeTab = this.$route.params.id
     }
  }
</script>

<style lang="less" scoped>
    .product-list {
        height: 100%;
        background: url("../../assets/common/_bg.png") no-repeat;
        background-size: cover;
    }

    .pl-header {
        background: url("../../assets/common/header_bg.png") no-repeat;
        background-size: cover;
    }

    .clearBorder:after {
        border: none;
    }


    .tabs {
        background: rgba(0, 0, 0, 0.1);
        padding: 10px 30px;

        .tab-item {
            font-size: 30px;
            color: #fff;
            text-align: center;
            position: relative;
            padding-bottom: 6px;

            &.active:after {
                content: '';
                width: 40px;
                border-bottom: 2px solid #fff;
                position: absolute;
                bottom: 0px;
            }
        }

    }

    .content {
        padding: 30px;
    }

    .productions {
        flex: 2;
        flex-direction: row;
        flex-wrap: wrap;

        .production-wrapper {
            width: 50%;
        }
    }
</style>
