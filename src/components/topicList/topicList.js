import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import '@tarojs/async-await'
import { getTopicList } from '../../actions/topicList';

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
      <View>TopicList</View>
    )
  }
}

export default TopicList;