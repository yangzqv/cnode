import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button, Picker } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import "./publish.scss";

@connect(({menu}) => ({
  cataData: menu.cataData
}))

class Publish extends Component {
  state = {
    selectorChecked: ''
  }

  changeCata(event) {
    const { cataData } = this.props;
    this.setState({
      selectorChecked: cataData[event.detail.value]['value']
    })
  }

  render() {
    const { cataData } = this.props;

    return (
      <View>
        <Picker
          mode='selector'
          range={cataData}
          rangeKey='value'
          onChange={this.changeCata.bind(this)}
        >
          <View className='picker'>当前选择：{this.state.selectorChecked}</View>
        </Picker>
      </View>
    );
  }
}

export default Publish;
