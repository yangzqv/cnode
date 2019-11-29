import Taro from '@tarojs/taro';
import { getJSON, postJSON } from '../utils/request';
import api from '../constants/api';
import { LOGIN_SUCCESS, LOGIN_FAIL }  from '../constants/user';

export default function accessToken(params) {
  return async dispatch => {
    const result = await postJSON(api.checkUserToken, params);
    if (result && result.data && result.data.success) {
      dispatch({
        type: LOGIN_SUCCESS, 
        accessToken: params.accesstoken, 
        avatar_url: result.data.avatar_url,
        loginname: result.data.loginname
      })
      return result.data;
    } else {
      dispatch({
        type: LOGIN_SUCCESS, 
        accessToken: null, 
        avatar_url: null,
        loginname: null
      })
    }

    return false;
  }
}

// 获取用户信息 
export async function getUserInfo(params) {
  const result = await getJSON(api.getUserInfo + params.loginname);
  if (result && result.data && result.data.success) {
    return result.data;
  } else {
    Taro.showToast({
      title: '拉取用户信息失败'
    })
  }

  return false;
}
