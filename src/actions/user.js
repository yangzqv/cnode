import Taro from '@tarojs/taro';
import { getJSON, postJSON } from '../utils/request';
import api from '../constants/api';

export default function accessToken(params) {
  return async dispatch => {
    const result = await postJSON(api.checkUserToken, params);
    if (result && result.data && result.data.success) {
      return result.data;
    }

    return false;
  }
}
