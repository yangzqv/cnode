import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import myTimeToLocal from '../../utils/date';
import './panel.scss';

class Panel extends Component {
  render() {
    const { listData, title } = this.props;
    return (
      <View  className='topic-panel'>
        <View className='topic-panel-title'>{title}</View>
        {listData.map(item => (
          <View key={item.id} className='topic-panel-list'>
            <Image src={item.author.avatar_url} className='topic-panel-list-img' />
            {/* <Text className='topic-panel-desc'>{item.title}</Text> */}
            <Text className='topic-panel-list-date' >{myTimeToLocal(item.last_reply_at)}</Text>
          </View>
        ))}
      </View>
    )
  }
}

Panel.defaultProps = {
  listData: []
}

export default Panel;