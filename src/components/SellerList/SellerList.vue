<template>
  <div class="seller-list">
      <ul>
          <li class="seller-item border-1px">
              <a href="">
                <div class="seller-left">
                    <img src="./images/shop/2.jpg" alt="">
                </div>
                <div class="seller-right">
                    <section class="seller-header">
                        <h4 class="seller-title ellipsis">江边城外,与你有约</h4>
                        <ul class="seller-detail">
                            <li>准</li>
                            <li>时</li>
                            <li>宝</li>
                        </ul>

                    </section>
                    <section class="seller-score">
                        <!-- 左侧 -->
                        <section class="seller-score-left">
                            <div class="star">
                                <span class="star-item on"></span>
                                <span class="star-item on"></span>
                                <span class="star-item on"></span>
                                <span class="star-item half"></span>
                                <span class="star-item off"></span>
                            </div>
                            <div class="score">3.7</div>
                            <div class="order-num">
                                月售99单
                            </div>
                        </section>
                        <!-- 右侧 -->
                        <section class="seller-score-right">
                            <span>平台专送</span>
                        </section>
                    </section>
                    <section class="seller-delivery">
                        <span>20元起送</span>
                        /
                        <span>配送费约5元</span>
                    </section>
                </div>
              </a>
          </li>
           <li class="seller-item border-1px">
              <a href="">
                <div class="seller-left">
                    <img src="./images/shop/2.jpg" alt="">
                </div>
                <div class="seller-right">
                    <section class="seller-header">
                        <h4 class="seller-title ellipsis">江边城外,与你有约</h4>
                        <ul class="seller-detail">
                            <li>准</li>
                            <li>时</li>
                            <li>宝</li>
                        </ul>

                    </section>
                    <section class="seller-score">
                        <!-- 左侧 -->
                        <section class="seller-score-left">
                            <div class="star">
                                <span class="star-item on"></span>
                                <span class="star-item on"></span>
                                <span class="star-item on"></span>
                                <span class="star-item half"></span>
                                <span class="star-item off"></span>
                            </div>
                            <div class="score">3.7</div>
                            <div class="order-num">
                                月售99单
                            </div>
                        </section>
                        <!-- 右侧 -->
                        <section class="seller-score-right">
                            <span>平台专送</span>
                        </section>
                    </section>
                    <section class="seller-delivery">
                        <span>20元起送</span>
                        /
                        <span>配送费约5元</span>
                    </section>
                </div>
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
     @import '../../common/stylus/mixins.styl';
    .seller-item      
        bottom-border-1px(#f1f1f1)
        a
            clearFix()
            display: block;
            box-sizing: border-box;
            padding: 15px 8px;
            width: 100%;
            .seller-left
                float left
                width 23%
                height 75px
                padding-right 10px
                box-sizing border-box 
                img
                    width 100%
                    height 100%
            .seller-right
                float right
                width 77%
                .seller-header
                    clearFix()
                    .seller-title
                        float left
                        width 140px
                        font-size 20px
                        &::before
                            content '品牌'
                            display inline-block
                            color #333
                            background-color orange
                            font-size 12px
                            line-height 12px
                            padding 3px
                            margin-right 4px
                            border-radius 3px
                    .seller-detail
                        float right
                        li
                            float left
                            border 1px solid #ddd
                            border-radius 2px
                            font-size 9px
                            padding 2px
                .seller-score
                    clearFix()
                    margin-top 10px
                    marign-bottom 10px
                    .seller-score-left
                        line-height 20px
                        .star
                            float left
                        .score
                            float left
                            color orange
                            font-size 10px
                        .order-num
                            float left
                            margin-left 10px
                            font-size 10px
                            color #666
                    .seller-score-right
                        float right
                        font-size 10px
                        transform scale(0.8)
                        color red
                        border 1px solid red
                        padding 2px
                .seller-delivery
                    clearFix()
                    margin-top 10px
                    font-size 10px
                    color #777


</style>
