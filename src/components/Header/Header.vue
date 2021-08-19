<template>
  <div class="header">
    <slot name="left"></slot>
    <div class="header-title ellipsis">
      {{ title }}
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="stylus" >
    .header
        position: fixed
        top 0
        left 0
        height 2.8125rem
        width 100%
        background-color #02a774
        color #fff
        .header-title
            position absolute
            top 50%
            left 50%
            transform translate(-50%,-50%)
            width 50%
            text-align center
        .header-search
            position absolute
            top 50%
            left 10px
            transform translateY(-50%)
            width 10%
            .iconfont
                font-size 30px
        .header-login
            position absolute
            top 50%
            right .625rem
            transform translateY(-50%)

</style>
