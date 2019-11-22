import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image, RichText} from '@tarojs/components';
import { connect } from '@tarojs/redux';
import myTimeToLocal from '../../utils/date' 
import './replies.scss';
import zan from '../../assets/img/zan.png';
import myzan from '../../assets/img/myzan.png';
import zhuan from '../../assets/img/zhuan.png'

const isWeapp = process.env.TARO_ENV === 'weapp'
class Replies extends Component {
  admire(reply) {
    if (this.props.onAdmire) {
      this.props.onAdmire(reply);
    }
  }

  render() {
    const { replies } = this.props;
    return (
      <View className='topicinfo-replies'>
        {replies.map((item, index) => (
          <View key={item.id} className='topicinfo-repliy'> 
            <Image className='topicinfo-repliy-image' src={item.author ? item.author.avatar_url : ''}></Image>
            <View className='topicinfo-repliy-right'>
              <View className='topicinfo-repliy-right-body'>
                <View className='topicinfo-repliy-right-pie'>
                  <Text className='loginname'>{item.author ? item.author.loginname : ''}</Text>
                  <Text className='floor'>{(index + 1) + '楼'}</Text>
                  <Text className='time'>{myTimeToLocal(item.create_at)}</Text>
                </View>
                <View className='topicinfo-repliy-right-content'>
                  {isWeapp ? <RichText node={item.content} /> : <View dangerouslySetInnerHTML={{__html: item.content}}></View>}
                </View>
              </View>
              <View className='topicinfo-repliy-right-zan'>
                <Image 
                  className='topicinfo-repliy-image' 
                  src={item.is_uped ? myzan : zan}
                  onClick={this.admire.bind(this, item)}
                ></Image>
                <Text>{item.ups.length}</Text>
                <Image className='topicinfo-repliy-image' src={zhuan}></Image>
              </View>
            </View>
          </View>
        ))}
      </View>
    )
  }
}

Replies.defaultProps = {
  replies: []
}

export default Replies;