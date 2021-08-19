<template>
  <div class="login">
    <a class="login-back">
      <i class="iconfont icon-icon_zuo"></i>
    </a>
    <div class="login-wrap">
        <div class="login-header">
            <h2>来点外卖</h2>
            <div class="login-title">
                <a href="javascript:;" class="on">短信登录</a>
                <a href="javascript:;">密码登录</a>
            </div>
        </div>
        <div class="login-content">
            <form action="#">
                <!-- 短信登录 -->
                <div class="login-by-msg">
                    <section class="tel">
                        <input type="text" placeholder="手机号">
                        <span>获取验证码</span>
                    </section>
                    <section class="code">
                        <input type="text" placeholder="验证码">
                    </section>
                    <section class="hint">
                        温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                        <a href="javascript:;">《用户服务协议》</a>
                    </section>
                </div>
                <!-- 密码登录 -->
                <div class="login-by-pwd"></div>
                <!-- 登录 -->
                <button class="login_submit">登录</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
    .login
        background-color #fff
        height 100%
        width 100%
        .login-back
            position absolute
            top 10px
            left 10px
            .iconfont
                font-size 26px
                font-weight 700
        .login-wrap
            padding-top 65px
            width 80%
            margin 0 auto
            .login-header
                text-align center
                h2
                    font-size 40px
                    color #02a774
                    font-weight 700
                .login-title
                    margin-top 40px
                    a
                        margin 10px
                        padding-bottom 3px
                        border-bottom 2px solid #fff
                        &.on
                            color #02a774
                            padding-bottom 3px
                            font-weight 700
                            border-bottom 2px solid #02a774
            .login-content
                .login-by-msg
                    margin 18px 0
                    .tel,.code,.hint
                        margin-top 18px
                        position relative
                        font-size 14px
                        input
                            width 100%
                            padding 12px
                            border 1px solid #ccc
                            border-radius 5px
                            box-sizing border-box
                        span
                            position absolute
                            top 50%
                            right 10px
                            transform  translateY(-50%)
                            color #ccc
                    .hint
                        color #999
                        font-size 14px
                        line-height 20px
                        a
                            color #02a774
                .login-by-pwd
                .login_submit
                    width 100%
                    margin-top 20px
                    background-color #02a774
                    color #fff
                    border 0
                    border-radius 4px
                    font-size 16px
                    line-height 42px

</style>
