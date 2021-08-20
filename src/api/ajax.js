/*
    ajax请求函数模块
    返回值: promise对象(异步返回的数据是: response.data)
 */
import axios from 'axios';

export default function ajax(url, data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {
        let promise;
        if (type === 'GET') {
            // get 请求拼接参数，并发送请求
            let str = '';
            Object.keys(data).forEach((key) => {
                str += `${key}=${data[key]}&`;
            });
            if (str !== '') {
                str = str.substring(0, str.lastIndexOf('&'));
            }
            url = url + '?' + str;
            // 发送get 请求
            promise = axios.get(url);
        } else {
            // 发送post请求
            promise = axios.post(url, data)
        }

        promise.then(res => {
            // 成功
            resolve(res.data);
        }).catch(error => {
            // 失败
            reject(error);
        })
    })

};
