import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, RichText } from '@tarojs/components';
import './topicInfo.scss';

class TopicInfo extends Component {
  render() {
    const { topicInfo } = this.props;

    return (
      <View className='topic-info-container'>
        <View className='topic-info-header'>
          <View className='topic-info-header-title'>
          {topicInfo.top ? <View className='desc-type'>置顶</View> : (topicInfo.tab === 'share' ? <View className='desc-type blue'>分享</View> : <View className='desc-type blue'>问答</View>)}
            {/* <Text>置顶</Text> */}
            <Text className='topic-title-desc'>{topicInfo.title}</Text>
          </View>
          <View className='topic-info-header-pie'>
            <Text>{topicInfo.create_at}</Text>
            <Text>{topicInfo.author.loginname}</Text>
            <Text>{topicInfo.visit_count + ' 次浏览'}</Text>
          </View>
        </View>
        <View className='topic-info-body'>
          <RichText nodes={topicInfo.content} />
        </View>
      </View>
    )
  }
}

export default TopicInfo;