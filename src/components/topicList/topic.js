import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import one from './1.png';
import './topic.scss'

class Topic extends Component {
  render() {
    const { item } = this.props;
    return (
      <View className='topic-content'>
        <Image 
          src={item.author.avatar_url} 
          className='topic-img'
        ></Image>
        <View className='right-desc'>
          <View className='des-title'>
            <Text className='desc-type'>置顶</Text>
            <Text className='des-detail'>服务器迁移到aws日本机房</Text>
          </View>
          <View className='des-intro'>
            <Text>{item.author.loginname}</Text>
            <Text>3/148</Text>
            <Text>创建时间：2018-10-27</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Topic;