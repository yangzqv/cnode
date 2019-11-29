import Taro from '@tarojs/taro';
import { getJSON, postJSON } from '../utils/request';
import api from '../constants/api';
import { LOGIN_SUCCESS, LOGIN_FAIL }  from '../constants/user';

export default function accessToken(params) {
  return async dispatch => {
    const result = await postJSON(api.checkUserToken, params);
    if (result && result.data && result.data.success) {
      dispatch({type: LOGIN_SUCCESS, accessToken: params.accesstoken, loginname: result.data.loginname})
      return result.data;
    } else {
      dispatch({type: LOGIN_SUCCESS, accessToken: null, loginname: null})
    }

    return false;
  }
}
