// 完全安装redux异步编程的操作去做
import { SHOWDRAWER, HIDEDRAWER, CHANGECATA } from '../constants/menu';


export function showDrawer() {
  return dispatch => {
    dispatch({ type: SHOWDRAWER });
  }
}

export function hideDrawer() {
  return dispatch => {
    dispatch({ type: HIDEDRAWER });
  }
}

export function changeCata(currentCata) {
  return dispatch => {
    dispatch({ type: CHANGECATA, currentCata: currentCata})
  }
}
