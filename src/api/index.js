/* 
 * 接口请求模块
*/
import ajax from './ajax';

// 1、根据经纬度获取位置详情 http://localhost:3000/position/:geohash
export const getAddress = (geohash) => ajax(`/position/${geohash}`);

// 2、获取食品分类列表 http://localhost:3000/index_category
export const getFoodCate = () => ajax('/index_category');

// 3、根据经纬度获取商铺列表 参数：经纬度
export const getSellerList = (longitude,latitude) => ajax('/shops',{longitude,latitude})

// 4、根据经纬度和关键字搜索商铺列表