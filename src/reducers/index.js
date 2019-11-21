import { combineReducers } from 'redux'
import menu from './menu';
import topicList from './toplicList';
import user from './user'

export default combineReducers({
  menu,
  topicList,
  user
})
