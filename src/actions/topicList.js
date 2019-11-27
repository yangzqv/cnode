import Taro from '@tarojs/taro';
import { 
  GETTOPICLIST, 
  GETNEXTTOPICLIST, 
  GETTOPICINFO,
  ADMIRESUCCESS
} from '../constants/topicList';
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

// 点赞话题回复

// redux 的做法
// export function admireTopic(params) {
//   return async dispatch => {
//     const result = await postJSON(api.upReplay + params.replyid + '/ups', params);
//     console.log('result', result)
//     if (result && result.data && result.data.success) {
//       dispatch({type: ADMIRESUCCESS})
//     } else {
//        Taro.showToast({
//          title: '点赞失败',
//          icon: 'none'
//        })
//     }
//   }
// }
// 普通方法
export async function admireTopic(params) {  
  const result = await postJSON(api.upReplay + params.replyid + '/ups', params);
  console.log('result', result)
  if (result && result.data && result.data.success) {
    return result.data;
  } else {
      Taro.showToast({
        title: '点赞失败',
        icon: 'none'
      })
  }

  return false;
}

// 评论功能
export async function replyContent(params) {
  const result = await postJSON(api.replayTopic + params.topicid + '/replies', params);
  if (result && result.data && result.data.success) {
    return result.data;
  } else {
      Taro.showToast({
        title: '评论失败',
        icon: 'none'
      })
  }

  return false;
}

