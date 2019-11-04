import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './menu.scss';
import cata from '../../assets/img/cata.png';
import login from '../../assets/img/login.png';

class Menu extends Component {
  render() {
    return (
      <View className='topiclist-menu'>
        <Image src={cata} className='image' />
        <Text>全部</Text>
        <Image src={login} className='image' />
      </View>
    )
  }
}

export default Menu;