import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';

class Replies extends Component {
  render() {
    const { replies } = this.props;
    
    return (
      <View>Replies</View>
    )
  }
}

export default Replies;