// 完全安装redux异步编程的操作去做
import { SHOWDRAWER, HIDEDRAWER, CHANGECATA } from '../constants/menu';
import { getTopicList } from './topicList';

export function showDrawer() {
  return dispatch => {
    dispatch({ type: SHOWDRAWER, isShow: Boolean(true) });
  }
}

export function hideDrawer() {
  return dispatch => {
    dispatch({ type: HIDEDRAWER, isShow: Boolean(false) });
  }
}

export function changeCata(currentCata) {
  return dispatch => {
    dispatch({ type: CHANGECATA, currentCata: currentCata});
    dispatch(getTopicList({tab: currentCata.key, page: 1, limit: 20}))
  }
}
