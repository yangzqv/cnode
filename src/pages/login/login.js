import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Input } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import  './login.scss';
import Head from '../../components/head/head';

class Login extends Component {
  config = {
    navigationBarTitleText: "登录"
  };

  render() {
    return (
      <View className='login-body'>
        <Head />
        <View className='form'>
          <Input className='access-input' placeholder='请输入token' />
          <Button className='btn-login'>登录</Button>
        </View>
      </View>
    )
  }
}

export default Login;