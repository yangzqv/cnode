import Taro, { Component, connectSocket } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { getTopicInfo, admireTopic, replyContent } from '../../actions/topicList';
import { validateUser } from '../../actions/user';
import Replies from '../../components/topicInfo/replies';
import TopicInfo from '../../components/topicInfo/topicInfo';
import ReplyContent from '../../components/topicInfo/replyContent';
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
  // onAdmireTopic(params) {
  //   dispatch(admireTopic(params))
  // }
}))

class Detail extends Component {
  config = {
    navigationBarTitleText: "话题详情"
  };

  state = {
    showReplyContent: false,  // 显示回复组件
  }
  componentWillMount() {
    this.getDetail();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.admireState != nextProps.admireState) {
  //     this.getDetail();
  //   }
  // }

  getDetail() {
    const { user } = this.props;
    const { topicId } = this.$router.params;
    if (this.props.onGetTopicInfo && topicId) {
      this.props.onGetTopicInfo({id: topicId, mdrender: true, accesstoken: user.accesstoken})
    }
  }

  // admire(reply) {
  //   const { user } = this.props;
  //   const params = { replyid: reply.id, accesstoken: user.accesstoken};
  //   if (this.props.onAdmireTopic) {
  //     this.props.onAdmireTopic(params);
  //   }
  // }

  // 普通方法
  admire(reply) {
    const { user } = this.props;
    const params = { replyid: reply.id, accesstoken: user.accesstoken};
    const result = admireTopic(params).then(data => {
      if (data && data.success) {
        // 点赞成功或者取消点赞成功
        this.getDetail();
      }
    })
  }
 
  async reply() {
    const { user } = this.props;
    const result = await validateUser(user);
    if (result) {
      this.setState({showReplyContent: true});
    }
  }

  onHandleCancel() {
    this.setState({showReplyContent: false})
  }

  onHandleOk(content) {
    const { user } = this.props;
    const params = { topicid: this.$router.params.topicId, accesstoken: user.accesstoken, content } 
    replyContent(params).then(result => {
      if (result.success) {
        this.getDetail();
        this.onHandleCancel();
      }
    })
  }

  render() {
    const { topicInfo, replies, user } = this.props;
    const { showReplyContent } = this.state;
    const selfPublish = user.loginname === topicInfo.author.loginname;
    return (
      <View className='detail-container'>
        {showReplyContent && 
          (<ReplyContent 
            onCancel={this.onHandleCancel.bind(this)}
            onOk={this.onHandleOk.bind(this)}
          />)
        }
        <TopicInfo topicInfo={topicInfo} selfPublish={selfPublish} />
        <Replies  
          replies={replies} 
          onAdmire={this.admire.bind(this)}  
          user={user}
        />
        <Button className='replyBtn' onClick={this.reply.bind(this)}>回复</Button>
      </View>
    )
  }
}

export default Detail;