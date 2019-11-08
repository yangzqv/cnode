import { GETTOPICLIST, GETNEXTTOPICLIST, GETTOPICINFO } from '../constants/topicList';
import { getJSON, postJSON } from '../utils/request';
import api from '../constants/api';

export function getTopicList(params) {
  return async dispatch => {
    const result = await getJSON(api.getTopics, params);
    if (result.data.success) {
      dispatch({type: GETTOPICLIST, list: result.data.data})
    }
  }
}

export function getNextTopicList(params) {
  return async dispatch => {
    const result = await getJSON(api.getTopics, params);
    if (result.data.success && result.data.data.length > 0 ) {
      dispatch({type: GETNEXTTOPICLIST, list: result.data.data, page: params.page})
    }
  }
}

// 请求话题详情
export function getTopicInfo(params) {
  return async dispatch => {
    const result = await getJSON(api.getTopicInfo + params.id, params);
    if (result.data.success) {
      dispatch({type: GETTOPICINFO, infoData: result.data.data})
    }
  }
}

