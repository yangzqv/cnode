import Taro, { Component, connectSocket } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { getTopicInfo } from '../../actions/topicList';
import Replies from '../../components/topicInfo/replies';
import TopicInfo from '../../components/topicInfo/topicInfo';
import './detail.scss';

@connect(({topicList, user}) => ({
  topicInfo: topicList.topicInfo,
  replies: topicList.replies,
  user
}), (dispatch) => ({
  onGetTopicInfo(params) {
    dispatch(getTopicInfo(params))
  }  
}))

class Detail extends Component {
  config = {
    navigationBarTitleText: "话题详情"
  };


  componentWillMount() {
    const { user } = this.props;
    const { topicId } = this.$router.params;
    if (this.props.onGetTopicInfo && topicId) {
      this.props.onGetTopicInfo({id: topicId, mdrender: true, accesstoken: user.accesstoken})
    }
  }

  render() {
    const { topicInfo, replies } = this.props;
    return (
      <View className='detail-container'>
        <TopicInfo topicInfo={topicInfo} />
        <Replies  replies={replies} />
      </View>
    )
  }
}

export default Detail;