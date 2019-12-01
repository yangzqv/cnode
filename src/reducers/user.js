import { LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/user';
import { setCache, getCache } from '../utils/cache';

const cachekey = 'cnode-user-key';
const user_cache = getCache(cachekey) ? getCache(cachekey) : {};
const USER_STATE = {
  // accesstoken: null,
  // avatar_url: null,
  // loginname: null
  ...user_cache
}

export default function user(preState=USER_STATE, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      let successState = { 
        ...preState,
        accesstoken: action.accessToken, 
        avatar_url: action.avatar_url,
        loginname: action.loginname
      };
      setCache(cachekey, successState);
      return successState;
    case LOGIN_FAIL:
      let failState = {
        ...preState, 
        accesstoken: null, 
        avatar_url: null,
        loginname: null
      }
      setCache(cachekey, failState);
      return failState;
    default:
      return {...preState};
  }
}