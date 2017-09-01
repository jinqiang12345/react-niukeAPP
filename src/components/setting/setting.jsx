import React from 'react';
import {
   List, WhiteSpace, NavBar, Switch, Modal, Toast, Button
} from 'antd-mobile';
import {  hashHistory } from 'react-router';
const alert = Modal.alert;
export default class Demo extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.changeNavTitle('设置');
  }
  render() {
    const Item = List.Item;
    const data1 = [
      {
        text: '修改手机号码',
      },
      {
        text: '修改邮箱',
      },
      {
        text: '修改密码',
      },
      {
        text: '社交账号绑定',
      }
    ];
    const listItems1 = data1.map((data) =>
      <Item arrow="horizontal" onClick={() => {hashHistory.push('/other/notdone')}}
        extra={<span style={{ fontSize: "80%", color: "#148F77" }}></span>}>
        <span className="listspan">{data.text}</span>
      </Item>
    );
    const data2 = [
      {
        text: '设置智能组卷题目数',
      },
      {
        text: '设置智能组卷来源',
      },
      {
        text: '智能组卷已屏蔽题目',
      }
    ];
    const listItems2 = data2.map((data) =>
      <Item arrow="horizontal" onClick={() => {hashHistory.push('/other/notdone')}}
        extra={<span style={{ fontSize: "80%", color: "#148F77" }}></span>}>
        <span className="listspan">{data.text}</span>
      </Item>
    );
    return (
      <div>
        <WhiteSpace size="xs" />
        <List>{listItems1}</List>
        <WhiteSpace size="xs" />
        <List>{listItems2}</List>
        <List className="listdiv">
            <Item arrow="horizontal" onClick={() => {hashHistory.push('/other/notdone')}}
              extra={<span style={{ fontSize: "80%", color: "#148F77" }}></span>}>
              <span className="listspan">提醒和邮件</span>
            </Item>
            <WhiteSpace size="xs" />
            <Item arrow="horizontal" onClick={() => {hashHistory.push('/other/notdone')}}
              extra={<span style={{ fontSize: "80%", color: "#148F77" }}></span>}>
              <span className="listspan">修改手机号码</span>
            </Item>
            <WhiteSpace size="xs" />
            <Item align="middle" onClick={() => alert('退出', '确定退出登录么?', [
                              { text: '取消', onPress: () => console.log('cancel') },
                              {
                                text: '确定',
                                onPress: () => new Promise((resolve) => {
                                  Toast.info('已退出登录', 1);
                                  setTimeout(resolve, 1000);
                                }),
                              },
                            ])}>
              <div className="listspan" style={{  width: "100%", textAlign: "center" }}>退出登录</div>
            </Item>
          </List>
      </div>
    );
  }
}
