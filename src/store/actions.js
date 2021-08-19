import { getAddress, getFoodCate, getSellerList } from '../api/index'
import * as types from './mutation-type'
export default {
    /* 异步获取地址，并将地址存到state中  */
    async getAddress({ state, commit }) {
        const geohash = state.latitude + ',' + state.longitude;
        const res = await getAddress(geohash)
        // 存放到state中
        commit(types.SET_ADDRESS, { address: res.data });
    },
    /* 异步获取分类 */
    async getCategory({ commit }) {
        const res = await getFoodCate();
        // 保存到state中
        commit(types.SET_CATEGORY, { categorys: res.data })
    },
    /* 异步获取卖家列表，并保存 */
    async getSellerList({ commit, state }) {
        { latitude, longitude }=state;
        const res = await getSellerList(latitude, longitude);
        // 保存到state中
        commit(types.SET_SELLERS, res.data);
    }

}