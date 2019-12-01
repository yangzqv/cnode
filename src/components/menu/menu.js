import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import { AtDrawer } from 'taro-ui'
import { connect } from '@tarojs/redux';
import './menu.scss';
import { showDrawer, hideDrawer, changeCata } from '../../actions/menu';
import { validateUser } from '../../actions/user';
import cata from '../../assets/img/cata.png';
import login from '../../assets/img/login.png';


// store.menu
@connect(({ menu, user }) => ({
  ...menu,
  user
}), (dispatch) => ({
  onShowMenu() {
    dispatch(showDrawer())
  },
  onHideMenu() {
    dispatch(hideDrawer())
  },
  onChangeCata(cata) {
    dispatch(changeCata(cata))
  }
}))

class Menu extends Component {
  // 显示抽屉事件
  showDrawer() {
    this.props.onShowMenu && this.props.onShowMenu();
  }
  
  hideDrawer() {
    this.props.onHideMenu && this.props.onHideMenu();
  }

  getItems(cataData) {
    return cataData.map(item => item.value);
  }

  clickCata(index) {
    const { cataData } = this.props;
    const clickCata = cataData[index];
    // 节省开销
    if (clickCata.key !== this.props.currentCata.key) {
      this.props.onChangeCata && this.props.onChangeCata(clickCata);
    }
  }

  async onHandleLogin() {
    const { user } = this.props;
    const result = await validateUser(user);
    if (result) {
      Taro.navigateTo({
        url: '/pages/user/user'
      })
    }
  }

  render() {
    const { isShow, cataData } = this.props;
    const items = this.getItems(cataData);
    return (
      <View className='topiclist-menu'>
        <View style='position: absolute;'> 
          <AtDrawer
            show={isShow}
            items={items}
            onItemClick={this.clickCata.bind(this)}
            onClose={this.hideDrawer.bind(this)}
          ></AtDrawer>
        </View>
        <Image onClick={this.showDrawer.bind(this)} src={cata} className='image' />
        <Text>{this.props.currentCata ? this.props.currentCata.value : ''}</Text>
        <Image 
          src={login} 
          className='image' 
          onClick={this.onHandleLogin.bind(this)}
        />
      </View>
    )
  }
}

export default Menu;