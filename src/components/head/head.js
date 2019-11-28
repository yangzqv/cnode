import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './head.scss';
import loginBack from '../../assets/img/loginBack.jpg';
import head from '../../assets/img/head.png';

class Head extends Component {
  render() {
    return (
      <View className='login-head'>
        <Image  className='login-head-back' src={loginBack} />
        <Image className='login-head-head' src={head} />
      </View>
    )
  }
}

export default Head;