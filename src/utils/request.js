import Taro from '@tarojs/taro';

export async function getJSON(url, data) {
  Taro.showLoading();
  const result = await Taro.request({url: url, data: data, method: 'GET'});
  if (result) {
    Taro.hideLoading();
    return result;
  }

  return false;
}

export async function postJSON(url, data) {
  Taro.showLoading();
  const result = await Taro.request({url: url, data: data, method: 'POST'});
  if (result) {
    Taro.hideLoading();
    return result;
  }

  return false;
}