import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, RichText, Image } from '@tarojs/components';
import myTimeToLocal from '../../utils/date';
import edit from '../../assets/img/edit.png';
import del from '../../assets/img/del.png';
import './topicInfo.scss';

class TopicInfo extends Component {
  editTopic(topicInfo) {
    Taro.redirectTo({
      url: '/pages/publish/publish?edit=1'
    })
  }

  render() {
    const { topicInfo, selfPublish } = this.props;
    
    return (
      <View className='topic-info-container'>
        <View className='topic-info-header'>
          <View className='topic-info-header-title'>
          {topicInfo.top ? <View className='desc-type'>置顶</View> : (topicInfo.tab === 'share' ? <View className='desc-type blue'>分享</View> : <View className='desc-type blue'>问答</View>)}
            {/* <Text>置顶</Text> */}
            <Text className='topic-title-desc'>{topicInfo.title}</Text>
          </View>
          <View className='topic-info-header-pie'>
            <Text>{myTimeToLocal(topicInfo.create_at)}</Text>
            <Text>{topicInfo.author.loginname}</Text>
            <Text>{topicInfo.visit_count + ' 次浏览'}</Text>
          </View>
          {selfPublish && (
            <View className='topic-info-header-img'>
              <Image className='img' src={del} />
              <Image 
                className='img' 
                src={edit} 
                onClick={this.editTopic.bind(this, topicInfo)}
              />
            </View>
          )}
        </View>
        <View className='topic-info-body'>
          <RichText nodes={topicInfo.content} />
        </View>
      </View>
    )
  }
}

TopicInfo.defaultProps = {
  topicInfo: {}
}

export default TopicInfo;