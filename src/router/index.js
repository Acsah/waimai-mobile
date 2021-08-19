import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Order from '../pages/Order/Order';
import Personal from '../pages/Personal/Personal';
import Login from '../pages/Login/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        isShowFooterNav: true,
      },
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        isShowFooterNav: true,
      },
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        isShowFooterNav: true,
      },
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      meta: {
        isShowFooterNav: true,
      },
    }, {
      path: '/',
      redirect: '/home',
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
