<template>
  <div id="app">
    <router-view/>
    <FooterNav v-show="$route.meta.isShowFooterNav"/>
  </div>
</template>

<script>
import FooterNav from './components/FooterNav/FooterNav';

export default {
  name: 'App',
  components: {
    FooterNav,
  },
};
</script>

<style lang="stylus" scoped>
  #app
    width: 100%;
    height: 100%;
    background: #f5f5f5;
</style>

