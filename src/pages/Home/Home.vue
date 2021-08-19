<template>
  <div>
    <!-- 头部 -->
    <Header title="北京市海淀区学院路清华东路17号">
      <!-- 搜索 -->
      <span slot="left" class="header-search">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <!-- 注册登录 -->
      <span slot="right" class="header-login"> 登录 | 注册 </span>
    </Header>
    <!-- 主体区域 -->
    <div class="home-content-wrap">
      <!-- 导航轮播图 -->
      <div class="home-nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:void(0)" class="food-category">
                <div class="cate-img">
                  <img src="./images/nav/1.jpg" alt="">
                </div>
                <span>甜品饮料</span>
              </a>
              <a href="javascript:void(0)" class="food-category">
                <div class="cate-img">
                  <img src="./images/nav/2.jpg" alt="">
                </div>
                <span>甜品饮料</span>
              </a>
              <a href="javascript:void(0)" class="food-category">
                <div class="cate-img">
                  <img src="./images/nav/3.jpg" alt="">
                </div>
                <span>甜品饮料</span>
              </a>
              <a href="javascript:void(0)" class="food-category">
                <div class="cate-img">
                  <img src="./images/nav/4.jpg" alt="">
                </div>
                <span>甜品饮料</span>
              </a>
              <a href="javascript:void(0)" class="food-category">
                <div class="cate-img">
                  <img src="./images/nav/5.jpg" alt="">
                </div>
                <span>甜品饮料</span>
              </a>
              <a href="javascript:void(0)" class="food-category">
                <div class="cate-img">
                  <img src="./images/nav/6.jpg" alt="">
                </div>
                <span>甜品饮料</span>
              </a>
              <a href="javascript:void(0)" class="food-category">
                <div class="cate-img">
                  <img src="./images/nav/7.jpg" alt="">
                </div>
                <span>甜品饮料</span>
              </a>
              <a href="javascript:void(0)" class="food-category">
                <div class="cate-img">
                  <img src="./images/nav/8.jpg" alt="">
                </div>
                <span>甜品饮料</span>
              </a>
            </div>
            <div class="swiper-slide">Slide 2</div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

        </div>
      </div>

      <!-- 商家列表 -->
      <div class="home-seller-list">
        <div class="seller-title">
          <i class="iconfont icon-xuanxiang"></i>
          <span>附近商家</span>
        </div>
        <SellerList/>

      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header';
import SellerList from '../../components/SellerList/SellerList';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  mounted() {
    const mySwiper = new Swiper('.swiper-container', {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    });
  },
  components: {
    Header,
    SellerList,
  },
};
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixins.styl';
  .home-content-wrap
    position absolute
    top 3.125rem
    bottom 3.125rem
    width 100%
    .home-nav
      bottom-border-1px(#e4e4e4)
      width 100%
      height 200px
      background-color #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            width 100%
            height 100%
            .food-category
              display block
              text-align center
              width 25%
              .cate-img img
                width 50px
              span
                font-size 14px
    .home-seller-list
      marign-top 15px
      background-color #fff
      .seller-title
        padding-top 10px
        padding-left 10px
        color #666

</style>
