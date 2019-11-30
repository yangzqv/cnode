import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import Head from '../../components/head/head';
import Panel from '../../components/userInfo/panel';
import { getUserInfo } from '../../actions/user';
import { connect } from '@tarojs/redux';
import './user.scss';

@connect(({user}) => ({
  user
}))

class User extends Component {
  state = {
    recent_topics: [],
    recent_replies: []
  }

  async componentWillMount() {
    const { loginname } = this.props.user;
    const result = await getUserInfo({loginname});
    if (result) {
      this.setState({
        recent_topics: result.data.recent_topics,
        recent_replies: result.data.recent_replies
      })
    }
  }

  toPublish() {
    Taro.navigateTo({
      url: '/pages/publish/publish'
    })
  }

  render() {
    const { loginname, avatar_url } = this.props.user;
    const { recent_topics, recent_replies } = this.state;

    return (
      <View>
        <Head avatar_url={avatar_url} loginname={loginname} />
        <Panel listData={recent_topics} title='最近发布的话题' />
        <Panel listData={recent_replies} title='最近收到的回复' />
        <Button onClick={this.toPublish.bind(this)} className='publish-btn'>发布话题</Button>
      </View>
    )
  }
}

export default User;