import { GETTOPICLIST, GETNEXTTOPICLIST, GETTOPICINFO } from "../constants/topicList";

const TOPICLIST_STATE = {
  page: 1,
  limit: 20,
  list: [],
  topicInfo: {},
  replies: []
};

export default function topicList(preState = TOPICLIST_STATE, action) {
  switch (action.type) {
    case GETTOPICINFO:
      return { ...preState, topicInfo: {...action.infoData, replies: null}, replies: action.infoData.replies}
    case GETTOPICLIST:
      return { ...preState, list: action.list, page: 1 };
    case GETNEXTTOPICLIST:
      return { ...preState, list: preState.list.concat(action.list), page: action.page}
    default:
      return { ...preState };
  }
}
