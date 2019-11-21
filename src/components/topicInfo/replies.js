import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './replies.scss';

class Replies extends Component {
  render() {
    const { replies } = this.props;
    
    return (
      <View className='topicInfo-replies'>
        {replies.map(item => {
          return (
            <View 
              className='topicInfo-reply'
              key={item.id}
            >
              <Image className='topicInfo-reply-image'></Image>
              <View className='topicInfo-reply-right'>
                <View className='topicInfo-reply-right-body'>
                  <View className='topicInfo-reply-right-pie'></View>
                  <View className='topicInfo-reply-right-content'></View>
                </View>
                <View className='topicInfo-reply-right-zan'>
                  <Image></Image>
                  <Text></Text>
                  <Image></Image>
                </View>
              </View>
            </View>
          )
        })}
      </View>
    )
  }
}

export default Replies;