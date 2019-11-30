import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import myTimeToLocal from '../../utils/date';
import './panel.scss';

class Panel extends Component {
  toDetail(item) {
    Taro.navigateTo({
      url: `/pages/detail/index?topicId=${item.id}`
    })
  }

  render() {
    const { listData, title } = this.props;

    return (
      <View  className='topic-panel'>
        <View className='topic-panel-title'>{title}</View>
        {listData.map(item => (
          <View 
            key={item.id} 
            className='topic-panel-list'
            onClick={this.toDetail.bind(this, item)}
          >
            <View className='topic-panel-left'>
              <Image src={item.author.avatar_url} className='topic-panel-list-img' />
              <Text className='topic-panel-desc'>{item.title}</Text>
            </View>
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