import { GETTOPICLIST, GETNEXTTOPICLIST } from "../constants/topicList";

const TOPICLIST_STATE = {
  page: 1,
  limit: 20,
  list: []
};

export default function topicList(preState = TOPICLIST_STATE, action) {
  switch (action.type) {
    case GETTOPICLIST:
      return { ...preState, list: action.list, page: 1 };
    case GETNEXTTOPICLIST:
      return { ...preState, list: preState.list.concat(action.list), page: action.page}
    default:
      return { ...preState };
  }
}
