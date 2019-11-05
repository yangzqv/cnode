import { SHOWDRAWER, HIDEDRAWER, CHANGECATA } from '../constants/menu';

const MENU_STATE = {
  cataData: [
    { key: "all", value: "全部" },
    { key: "good", value: "精华" },
    { key: "share", value: "分享" },
    { key: "ask", value: "问答" },
    { key: "job", value: "招聘" },
    { key: "dev", value: "客户端测试" }
  ],
  currentCata: { key: "all", value: "全部" },
  isShow: false
};

export default function menu(preState = MENU_STATE, action) {
  switch (action.type) {
    // 显示抽屉
    case SHOWDRAWER:
      return { ...preState, isShow: true };
    // 隐藏抽屉
    case HIDEDRAWER:
      return { ...preState, isShow: false };
    // 点击抽屉，触发切换分类
    case CHANGECATA:
      return {...preState, currentCata: action.currentCata}
    default:
      return { ...preState };
  }
}
