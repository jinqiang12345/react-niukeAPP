import React from 'react';
import { Flex,WhiteSpace } from 'antd-mobile';
import FontAwesome from 'react-fontawesome';
export default class design extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toISOString().split('T')[0],
      day: new Date().getDay(),
      tempday: ''
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    switch(this.state.day) {
      case 0 : this.setState({
        tempday: '日'
      });break;
      case 1 : this.setState({
        tempday: '一'
      });break;
      case 2 : this.setState({
        tempday: '二'
      });break;
      case 3 : this.setState({
        tempday: '三'
      });break;
      case 4 : this.setState({
        tempday: '四'
      });break;
      case 5 : this.setState({
        tempday: '五'
      });break;
      case 6 : this.setState({
        tempday: '六'
      });break;
    }
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      data: new Date().toISOString().split('T')[0],
      day: new Date().getDay()
    });
  }
  render() {
    return (
        <Flex style={{ height: "1rem", width: "100%", backgroundColor: "#fff", margin: "0.05rem 0"}}>
          <Flex.Item style={{ flex: "1.5", height: "100%", textAlign: "center", color: "#fff", backgroundColor: "#148F77", opacity: "0.8",borderRadius: "0 1rem 1rem 0" }}>
            <WhiteSpace size="sm" />
            <span style={{ fontSize: "70%" }}>{ this.state.date }周{ this.state.tempday }</span>
            <br/>
            <span style={{ fontSize: "80%" }}>打卡</span>
          </Flex.Item>
          <Flex.Item style={{ height: "100%", textAlign: "center", color: "#333" }}>
            <WhiteSpace size="sm" />
            <span style={{ fontSize: "70%" }}>0</span>
            <br/>
            <span style={{ fontSize: "60%", color: "#979A9A" }}>今日刷题/道</span>
          </Flex.Item>
          <Flex.Item style={{ height: "100%", textAlign: "center", color: "#333" }}>
            <WhiteSpace size="sm" />
            <span style={{ fontSize: "70%" }}>0</span>
            <br/>
            <span style={{ fontSize: "60%", color: "#979A9A" }}>今日学习/节</span>
          </Flex.Item>
          <Flex.Item style={{ height: "100%", textAlign: "center", color: "#333" }}>
            <WhiteSpace size="sm" />
            <span style={{ fontSize: "70%" }}>4</span>
            <br/>
            <span style={{ fontSize: "60%", color: "#979A9A" }}>共打卡/天</span>
          </Flex.Item>
        </Flex>
    );
  }
}
