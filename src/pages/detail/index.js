import Taro, { Component, connectSocket } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { getTopicInfo, admireTopic } from '../../actions/topicList';
import Replies from '../../components/topicInfo/replies';
import TopicInfo from '../../components/topicInfo/topicInfo';
import './detail.scss';

@connect(({topicList, user}) => ({
  topicInfo: topicList.topicInfo,
  replies: topicList.replies,
  user,
  admireState: topicList.admireState
}), (dispatch) => ({
  onGetTopicInfo(params) {
    dispatch(getTopicInfo(params))
  },
  onAdmireTopic(params) {
    dispatch(admireTopic(params))
  }
}))

class Detail extends Component {
  config = {
    navigationBarTitleText: "话题详情"
  };

  componentWillMount() {
    this.getDetail();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.admireState != nextProps.admireState) {
      this.getDetail();
    }
  }

  getDetail() {
    const { user } = this.props;
    const { topicId } = this.$router.params;
    if (this.props.onGetTopicInfo && topicId) {
      this.props.onGetTopicInfo({id: topicId, mdrender: true, accesstoken: user.accesstoken})
    }
  }

  admire(reply) {
    const { user } = this.props;
    const params = { replyid: reply.id, accesstoken: user.accesstoken};
    if (this.props.onAdmireTopic) {
      this.props.onAdmireTopic(params);
    }
  }

  render() {
    const { topicInfo, replies } = this.props;
    return (
      <View className='detail-container'>
        <TopicInfo topicInfo={topicInfo} />
        <Replies  replies={replies} onAdmire={this.admire.bind(this)}  />
      </View>
    )
  }
}

export default Detail;