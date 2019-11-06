import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import '@tarojs/async-await'
import "./index.scss";

import Menu from "../../components/menu/menu";
import TopicList from "../../components/topicList/topicList";

class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Menu />
        <TopicList />
      </View>
    );
  }
}

export default Index;
