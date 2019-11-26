import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Textarea } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './replyContent.scss';

class ReplyContent extends Component {
  render() {
    return (
      <View className='reply-content'>
        <Textarea placeholder='请输入回复内容'></Textarea>
        <View>
          <Button>确定</Button>
          <Button>取消</Button>
        </View>
      </View>
    )
  }
}

export default ReplyContent;