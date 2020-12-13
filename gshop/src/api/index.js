/*
* 后台交互模块
* */
import ajax from "ajax"
/*
* 获取地址经纬度
* */
  export const reqAddress =geohash=>ajax('/api/position'+geohash)
/*
* 获取msite页面食物分类列表
* */
export const reqCategorys = ()=>ajax('/api/index_category')
/*
* 获取msite附近商家列表
* */
export const reqShops =  ({latitude, longitude})=>ajax('/api/shops', {latitude, longitude})
/*
* 账号密码登录
* */
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', { name, pwd, captcha }, 'POST')
/*
* 获取短信密码
* */
export const reqSendCode = phone =>ajax('/api/sendcode',{phone})
/*
* 手机号验证登录
* */
export const reqSmsLogin = (phone , code)=>ajax('/api/login_sms', {phone, code}, 'POST')
/*获取用户信息(根据会话)
*
* */
export const reqUser = () => ajax('/api/userinfo')
/*
* 请求退出
* */
export const reqlogout = ()=>ajax("/logout")
