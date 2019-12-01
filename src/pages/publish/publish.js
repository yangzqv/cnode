import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button, Picker, Input, Textarea } from "@tarojs/components";
import { submitTopic, updateTopic } from '../../actions/topicList';
import { connect } from "@tarojs/redux";
import "./publish.scss";

@connect(({ menu, user, topicList }) => ({
  cataData: menu.cataData,
  ...user,
  topicInfo: topicList.topicInfo
}))

class Publish extends Component {
  state = {
    selectorChecked: '',
    title: '',
    content: '',
    isEdit: false,
    topicInfoContent: null
  }

  componentWillMount() {
    const { edit } = this.$router.params;
    const { topicInfo } = this.props;
    this.setState({ isEdit: edit == 1 }, () => {
      if (this.state.isEdit) {
        this.setState({
          topicInfoContent: topicInfo,
          title: topicInfo.title,
          content: topicInfo.content
        })
      }
    })
  }

  changeCata(event) {
    const { cataData } = this.props;
    this.setState({
      selectorChecked: cataData[event.detail.value]['value']
    })
  }

  titleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  contentChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  // 提交
  async submitTopic() {
    const { selectorChecked, title, content, isEdit } = this.state;
    const { accesstoken, topicInfo } = this.props;
    if (selectorChecked && title && content ) {
      const params = { tab: 'dev', title, content, accesstoken, topic_id: topicInfo.id };
      const result = await submitTopic(params);
      const updateResult = await updateTopic(params);
      if (isEdit && updateResult) {
        // 编辑
        Taro.navigateBack();
      } else if (result) {
        Taro.redirectTo({
          url: '/pages/user/user'
        })
      }
    } else {
      Taro.showToast({
        title: '分类或者标题内容都不能为空',
        icon: 'none'
      })
    }
  } 

  render() {
    const { cataData } = this.props;
    const { selectorChecked, topicInfoContent } = this.state;

    return (
      <View className='publish-topic'>
        <Input 
          placeholder='请输入您要发布的标题' 
          onInput={this.titleChange.bind(this)} 
          className='publish-topic-title'
          value={topicInfoContent ? topicInfoContent.title : ''}
        />
        <Textarea 
          placeholder='请输入您要发布的内容' 
          onInput={this.contentChange.bind(this)} 
          className='publish-topic-content'  
          value={topicInfoContent ? topicInfoContent.content : ''}
        />
        <Picker
          mode='selector'
          range={cataData}
          rangeKey='value'
          onChange={this.changeCata.bind(this)}
        >
          <View className='publish-topic-cata'>{selectorChecked ? selectorChecked : '请选择'}</View>
        </Picker>
        <Button className='publish-topic-btn' onClick={this.submitTopic.bind(this)}>提交</Button>
      </View>
    );
  }
}

export default Publish;
