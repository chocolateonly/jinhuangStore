<template>
    <div class="product-list flexCol1">
        <div class="pl-header flexCol0">

            <Header title="详细信息" _className="header flexCol0 clearBorder" :on-press-left="goBack()" />


        </div>
        <div class="content flexCol1 overflowY">

            <div>
            </div>
        </div>
    </div>
</template>

<script>
    import global from "../../components/global";
    import Header from "../../components/Header";
    export default {
        name: "ProductDetails",
        components: {Header},
        methods:{
            goBack(){
                global.goBack(this)
            }
        }
    }
</script>

<style scoped>

</style>
