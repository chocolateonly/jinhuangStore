<template>
    <div id="app" class="flexCol1">
        <router-view/>
    </div>
</template>

<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width:100%;
        height: 100%;


        //全局样式
        .theme-color{
            color:#BC0203
        }
        .theme-bg{
            background: url("./assets/common/_bg.png") no-repeat;
            background-size: cover;
        }
        .font50{
            font-size: 50px;
        }
        .color3{
            color:#333
        }
        //header 红底白字
        .header {
            height: 128px;
            background: transparent;

            .van-nav-bar__title {
                color: #fff;
                line-height: 128px;
            }

            .van-icon-arrow-left {
                color: #fff;
                font-size: 44px;
            }

            .header-right-icon{
                width:60px
            }
        }

       .mr5{
           margin-right: 5px;
       }
        .ml5{
            margin-left: 5px;
        }
        .pr5{
            padding-right:5px;
        }
        .pl5{
            padding-left:5px;
        }
        /*flex*/
        .flexCol1{
            display: flex;
            flex: 1;
            flex-direction: column;
            min-width: 0;
            height: 100%;
            overflow-y: auto;
        }
        .flexCol0{
            display: flex;
            flex: 0;
            flex-direction: column;
        }
        .flexRow1{
            display: flex;
            flex: 1;
            flex-direction: row;
        }
        .flexRow0{
            display: flex;
            flex: 0;
            flex-direction: row;
        }
        .flexGrow1{
            flex-grow: 1;
        }
        .flexShrink1{
            flex-shrink: 1;
        }
        .jc-center{
            justify-content: center;
        }
        .jc-sb{
            justify-content: space-between;
        }
        .ai-center{
            align-items: center;
        }
        .jc-start{
            justify-content: flex-start;
        }
        .jc-end{
            justify-content: flex-end;
        }
        .ai-start{
            align-items: flex-start;
        }
        .ai-end{
            align-items: flex-end;
        }
        .overflowY{
            overflow-y: auto;
        }
        /**/
        .text-line-1{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .text-line-2{
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .text-line-3{
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    }

</style>
<script>

    export default {
        components: {}
    }
</script>
