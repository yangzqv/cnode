import { GETTOPICLIST } from '../constants/topicList';
import { getJSON, postJSON } from '../utils/request';
import api from '../constants/api';

export function getTopicList(params) {
  return async dispatch => {
    const result = await getJSON(api.getTopics, params);
    if (result && result.data) {
      console.log(result.data)
    }
  }
}