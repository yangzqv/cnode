import Taro, { Component } from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { getTopicList } from '../../actions/topicList';
import Topic from './topic';
import './topicList.scss'

@connect(({topicList, menu}) => ({
  ...topicList,
  currentCata: menu.currentCata
}), (dispatch) => ({
  onGetTopicList(params) {
    dispatch(getTopicList(params))
  }
}))

class TopicList extends Component {
  componentWillMount() {
    const { page, limit, currentCata } = this.props;
    this.props.onGetTopicList && this.props.onGetTopicList({page, limit, tab: currentCata.key});
  }
  
  render() {
    const { list } = this.props;
    return (
      <ScrollView className='top-container'>
        {list.map((item) => <Topic key={item.id} item={item} />)}
      </ScrollView>
    )
  }
}

export default TopicList;