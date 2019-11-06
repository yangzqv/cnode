import { GETTOPICLIST } from '../constants/topicList';
import { getJSON, postJSON } from '../utils/request';
import api from '../constants/api';

export function getTopicList(params) {
  return async dispatch => {
    const result = await getJSON(api.getTopics, params);
    console.log(result)
    // const result = getJSON(api.getTopics, params).then((res) => {
    //   if (res && res.data && res.data.success) {
    //     dispatch({type: GETTOPICLIST, list: res.data.data})
    //   }
    // })
    
  }
}