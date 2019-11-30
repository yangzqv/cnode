import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button, Picker, Input, Textarea } from "@tarojs/components";
import { submitTopic } from '../../actions/topicList';
import { connect } from "@tarojs/redux";
import "./publish.scss";

@connect(({menu, user}) => ({
  cataData: menu.cataData,
  ...user
}))

class Publish extends Component {
  state = {
    selectorChecked: '',
    title: '',
    content: ''
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

  async submitTopic() {
    const { selectorChecked, title, content } = this.state;
    const { accesstoken } = this.props;
    if (selectorChecked && title && content ) {
      const params = { tab: 'dev', title, content, accesstoken };
      const result = await submitTopic(params);
      if (result) {
        Taro.navigateBack();
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
    const { selectorChecked } = this.state;

    return (
      <View>
        <Picker
          mode='selector'
          range={cataData}
          rangeKey='value'
          onChange={this.changeCata.bind(this)}
        >
          <View className='picker'>{selectorChecked ? selectorChecked : '请选择'}</View>
        </Picker>
        <Input placeholder='请输入您要发布的标题' onInput={this.titleChange.bind(this)} />
        <Textarea placeholder='请输入您要发布的内容' onInput={this.contentChange.bind(this)} />
        <Button onClick={this.submitTopic.bind(this)}>提交</Button>
      </View>
    );
  }
}

export default Publish;
