import { GETTOPICLIST } from "../constants/topicList";

const TOPICLIST_STATE = {
  page: 1,
  limit: 20,
  list: []
};

export default function topicList(preState = TOPICLIST_STATE, action) {
  switch (action.type) {
    case GETTOPICLIST:
      return { ...preState, list: action.list };
    default:
      return { ...preState };
  }
}
