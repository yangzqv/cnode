import Taro, { Component } from '@tarojs/taro';
import { View, Text, ScrollView } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import '@tarojs/async-await'
import { getTopicList, getNextTopicList } from '../../actions/topicList';
import Topic from './topic';
import './topicList.scss'

@connect(({topicList, menu}) => ({
  ...topicList,
  currentCata: menu.currentCata
}), (dispatch) => ({
  onGetTopicList(params) {
    dispatch(getTopicList(params))
  },
  onGetNextTopicList(params) {
    dispatch(getNextTopicList(params))
  }
}))

class TopicList extends Component {
  componentWillMount() {
    const { page, limit, currentCata } = this.props;
    this.props.onGetTopicList && this.props.onGetTopicList({page, limit, tab: currentCata.key});
  }

  // 触发分页请求
  scrollToLower() {
    const { page, limit, currentCata } = this.props;
    this.props.onGetNextTopicList && this.props.onGetNextTopicList({page: (page + 1), limit, tab: currentCata.key});
  }
  
  render() {
    const { list } = this.props;
    return (
      <ScrollView 
        className='top-container'
        scrollY={Boolean(true)}
        onScrollToLower={this.scrollToLower.bind(this)}
      >
        {list.map((item) => <Topic key={item.id} item={item} />)}
      </ScrollView>
    )
  }
}

export default TopicList;