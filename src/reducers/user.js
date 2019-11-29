import { LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/user';

const USER_STATE = {
  accesstoken: null,
  avatar_url: null,
  loginname: null
}

export default function user(preState=USER_STATE, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...preState, 
        accesstoken: action.accessToken, 
        avatar_url: action.avatar_url,
        loginname: action.loginname
      };
    case LOGIN_FAIL:
      return {
        ...preState, 
        accesstoken: null, 
        avatar_url: null,
        loginname: null
      }
    default:
      return {...preState};
  }
}