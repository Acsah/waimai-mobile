/*  导出一个对象，里面存放一些方法，
    方法名就是mutation-types里存放的常量名，
    第一个参数对应的是state.js文件中的state;
    第二个参数的提交的参数 
    每个方法都是把数据保存到 state 中
*/
import * as types from './mutation-type'
/* 数据修改 */
export default {
    // 将地址信息保存到state中
    [types.SET_ADDRESS](state, { address }) {
        state.address = address;
    },
    // 保存分类信息
    [types.SET_CATEGORY](state, { categorys }) {
        state.categorys = categorys;
    },
    // 保存用户列表信息
    [types.SET_SELLERS](state, { sellers }) {
        state.sellers = sellers;
    }
}