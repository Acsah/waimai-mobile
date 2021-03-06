import { getAddress, getFoodCate, getSellerList } from '../api/index'
import * as types from './mutation-type'
export default {
    /* 异步获取地址，并将地址存到state中  */
    async getAddress({ state, commit }) {
        const geohash = state.latitude + ',' + state.longitude;
        const res = await getAddress(geohash)
        if (res.code === 0) {
            const address = res.data;
            // commit一个mutation
            commit(types.SET_ADDRESS, { address });
        }
    },
    /* 异步获取分类 */
    async getCategory({ commit }) {
        const res = await getFoodCate();
        if (res.code === 0) {
            const categorys = res.data;
            // commit一个mutation，保存到state中
            commit(types.SET_CATEGORY, { categorys })
        }
    },
    /* 异步获取卖家列表，并保存 */
    async getSellerList({ commit, state }) {
        const { latitude, longitude } = state;
        const res = await getSellerList(latitude, longitude);
        if (res.code === 0) {
            const sellers = res.data;
            //commit一个mutation， 保存到state中
            commit(types.SET_SELLERS, { sellers });
        }
    }

}