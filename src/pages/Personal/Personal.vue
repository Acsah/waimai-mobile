<template>
    <div class="personal">
        <Header title="我的"/>
        <!-- 1、登录、注册 -->
        <section class="personal-login">
            <!-- <a class='link'> -->
            <router-link to="/login" class="link">
                <div class="person-header">
                    <i class="iconfont icon-wode"></i>
                </div>
                <div class="person-info">
                    <p class="info-top">登录/注册</p>
                    <p class="info-bottom">
                        <i class="iconfont icon-shouji"></i>
                        <span>暂无绑定手机号</span>
                    </p>
                </div>
                <div class="arrow-right">
                    >
                </div>
            <!-- </a> -->
            </router-link>
        </section>
        <!-- 2、余额、积分 -->
        <section class="infos">

        </section>
        <!-- 3、订单 -->
        <section>

        </section>
    </div>
</template>

<script>
import Header from '../../components/Header/Header';

export default {
  components: {
    Header,
  },
};
</script>

<style lang="stylus" scoped>
    .personal
        .personal-login
            margin-top 46px
            .link
                position relative
                display block
                width 100%
                height 100px
                background-color #02a774
                color #fff
                padding: 20px 10px 20px 20px;
                box-sizing: border-box;
                .person-header
                    float left
                    .iconfont
                        font-size 70px
                .person-info
                    float left
                    padding 5px
                    p
                        margin 10px auto
                        &.info-top
                            font-size 20px
                        &.info-bottom
                            font-size 12px
                .arrow-right
                    position absolute
                    top 50%
                    right 15px
                    transform translateY(-50%)

</style>
