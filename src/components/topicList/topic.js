import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import date from '../../utils/date';
import one from './1.png';
import "./topic.scss";

class Topic extends Component {
  static defaultProps = {
    item: {
      author: {
        avatar_url: one,
        loginname: 'yangzq'
      },
      title: '小程序',
      reply_count: 3,
      visit_count: 138,
      create_at: '2019-01-01'
    }
  }
  
  render() {
    const { item } = this.props;
    return (
      <View className='topic-content'>
        <Image src={item.author.avatar_url} className='topic-img'></Image>
        <View className='right-desc'>
          <View className='des-title'>
            <View className='desc-type'>{item.top ? '置顶' : ''}</View>
            <View className='des-detail'>{item.title}</View>
          </View>
          <View className='des-intro'>
            <Text>{item.author.loginname}</Text>
            <Text>
              {item.reply_count}/{item.visit_count}
            </Text>
            <Text>{date(item.create_at)}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Topic;
