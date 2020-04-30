<template>
    <div class="bg flexCol1">
        <div class="header ">
            <div class="flexCol1 jc-end ai-center">
                <div class="tabs  flexRow0  ai-center">
                    <div class="tab-item flexRow1 jc-center"
                         v-for="(v,i) in tabs" :key="i"
                         :class="{'active':activeTab===i}"
                         @click="setActiveTab(i)">
                        {{v}}
                    </div>
                </div>
            </div>

        </div>


        <div class=" flexCol1 overflowY">
            <div class="content">

            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "BuyCenter",
        data() {
            return {
                activeTab: 0,
                tabs: ['预定订单', '历史订单']
            }
        },
        components: {},
        methods: {
            goBack() {
                this.$router.go(-1)
            },
            setActiveTab(i) {
                this.activeTab = i
            },
        }
    }
</script>

<style lang="less" scoped>
    .bg {
        height: 100%;
        background: url("../assets/common/_bg.png") no-repeat;
        background-size: cover;
    }

    .content {
        padding: 0.4rem;
        font-size: 0.4rem;
    }

    .tabs {
        padding: 10px 30px;

        .tab-item {
            font-size: 30px;
            color: #fff;
            text-align: center;
            position: relative;
            padding-bottom: 6px;
            margin: 0 20px;

            &.active:after {
                content: '';
                width: 60px;
                border-bottom: 2px solid #fff;
                position: absolute;
                bottom: 0px;
            }
        }

    }
</style>
