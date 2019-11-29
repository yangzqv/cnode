import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Input } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import  './login.scss';
import Head from '../../components/head/head';
import accessToken from '../../actions/user';

@connect(({user}) => ({
  user,
}), (dispatch) => ({
  onGetUserToken(params) {
    return dispatch(accessToken(params))
  }
}))
class Login extends Component {
  config = {
    navigationBarTitleText: "登录"
  };

  state = {
    token: '',
  }

  changeToken(event) {
    if (event && event.target) {
      this.setState({
        token: event.target.value
      })
    }
  }

  // 验证token
  loginToken() {
    if (this.state.token && this.props.onGetUserToken) {
      this.props.onGetUserToken({accesstoken: this.state.token}).then(result => {
        
      })
    } else {
      Taro.showToast({
        title: '请输入密钥再进行登录验证！',
        icon: 'none'
      })
    }
  }

  render() {
    return (
      <View className='login-body'>
        <Head />
        <View className='form'>
          <Input 
            onChange={this.changeToken.bind(this)} 
            className='access-input' 
            placeholder='请输入token' 
          />
          <Button onClick={this.loginToken.bind(this)} className='btn-login'>登录</Button>
        </View>
      </View>
    )
  }
}

export default Login;