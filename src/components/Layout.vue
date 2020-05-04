<template>
    <div class="bg flexCol1">
        <Header :title="title" _className="header flexCol0 clearBorder" :on-press-left="goBack">
            <slot></slot>
        </Header>

        <div class=" flexCol1 overflowY">
            <div class="content flexCol1">
                <slot name="content"></slot>
            </div>
        </div>

    </div>

</template>

<script>
  import Header from "./Header";

  export default {
    name: "Layout",
    props: {
      title: {
        type: String,
        default: '标题'
      },
      goBack: {
        type: Function,
        default: ()=>null
      }
    },
    components: {Header},
    methods: {
    }
  }
</script>

<style scoped>
    .bg {
        height: 100%;
        background: url("../assets/common/_bg.png") no-repeat;
        background-size: cover;
    }

    .content {
        padding: 0.4rem;
        font-size: 0.4rem;
    }
</style>
