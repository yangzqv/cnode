import Taro, { Component, connectSocket } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { getTopicInfo } from '../../actions/topicList';

@connect(({topicList}) => ({
  topicInfo: topicList.topicInfo,
  replies: topicList.replies
}), (dispatch) => ({
  onGetTopicInfo(params) {
    dispatch(getTopicInfo(params))
  }
}))

class Detail extends Component {
  componentWillMount() {
    const { topicId } = this.$router.params;
    if (this.props.onGetTopicInfo && topicId) {
      this.props.onGetTopicInfo({id: topicId})
    }
  }

  render() {
    const { topicInfo, replies } = this.props;
    

    return (
      <View>Detail</View>
    )
  }
}

export default Detail;