<template>
  <footer class="footer-nav">
    <span class="nav-item" :class="{on:isCurrentPath('/home')}" @click="changePath('/home')">
      <span class="nav-icon">
        <i class="iconfont icon-take-out"></i>
      </span>
      <span>外卖</span>
    </span>
    <span class="nav-item" :class="{on:isCurrentPath('/search')}" @click="changePath('/search')">
      <span class="nav-icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="nav-item" :class="{on:isCurrentPath('/order')}" @click="changePath('/order')">
      <span class="nav-icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </span>
    <span class="nav-item" :class="{on:isCurrentPath('/personal')}" @click="changePath('/personal')">
      <span class="nav-icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>我的</span>
    </span>
  </footer>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    isCurrentPath(path) {
      return this.$route.path === path;
    },
    changePath(path) {
      this.$router.replace(path);
    },
  },
};
</script>

<style lang="stylus" scoped>
    @import '../../common/stylus/mixins.styl';
    .footer-nav
        position fixed
        left 0
        bottom 0
        z-index 999
        height 3.125rem
        width 100%
        display flex
        background-color #fff
        .nav-item
            flex 1
            display flex
            flex-direction column
            align-items center
            margin .3125rem
            &.on
                color #02a774
            span
                font-size .75rem
            .nav-icon
                margin-top .1875rem
                margin-bottom .1875rem
                .iconfont
                    font-size 1.5rem

</style>
