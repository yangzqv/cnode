import { combineReducers } from 'redux'
import menu from './menu';
import topicList from './toplicList';

export default combineReducers({
  menu,
  topicList
})
