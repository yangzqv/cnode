import { LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/user';

const USER_STATE = {
  accesstoken: null,
  loginname: null
}

export default function user(preState=USER_STATE, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {...preState, accesstoken: action.accessToken, loginname: action.loginname};
    case LOGIN_FAIL:
      return {...preState, accesstoken: null, loginname: null}
    default:
      return {...preState};
  }
}