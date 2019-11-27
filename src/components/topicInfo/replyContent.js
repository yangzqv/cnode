import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Textarea } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './replyContent.scss';

class ReplyContent extends Component {
  state = {
    content: ''
  }
  btnCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  btnOk() {
    if (this.state.content && this.props.onOk) {
      this.props.onOk(this.state.content);
    }
  }

  onHandleChange(event) {
    if (event && event.target) {
      this.setState({ content: event.target.value })
    }
  }

  render() {
    return (
      <View className='reply-content'>
        <Textarea 
          className='reply-content-text' 
          placeholder='请输入回复内容'
          onInput={this.onHandleChange.bind(this)}
        ></Textarea>
        <View className='reply-content-btn-group'>
          <Button 
            className='btn'
            onClick={this.btnOk.bind(this)}
          >确定</Button>
          <Button 
            className='btn'
            onClick={this.btnCancel.bind(this)}
          >取消</Button>
        </View>
      </View>
    )
  }
}

export default ReplyContent;