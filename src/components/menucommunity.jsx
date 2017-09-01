import React from 'react';
import FontAwesome from 'react-fontawesome';
import {  hashHistory } from 'react-router';
import {
  List, Tabs,
} from 'antd-mobile';

const TabPane = Tabs.TabPane;

export default class menucommunity extends React.Component {
  componentDidMount() {
    this.props.changeTitle('社区');
  }
  render() {
    const Item = List.Item;
    const data1 = [
      {
        iconname: 'calendar',
        text: '通知',
      },
      {
        iconname: 'comments-o',
        text: '讨论区',
      },
      {
        iconname: 'dot-circle-o',
        text: '打卡动态',
      },
      {
        iconname: 'book',
        text: '领资料',
      }
    ];
    const listItems1 = data1.map((data) =>
      <Item
        key = {data.iconname}
        arrow="horizontal"
        onClick={() => {hashHistory.push('/other/notdone')}}
        >
          <span className="listspan"><FontAwesome name= {data.iconname} style={{ marginRight: "5%" }}/>{data.text}</span>
      </Item>
    );
    const data2 = [
      {
        iconname: 'star',
        text: '粉丝榜',
      },
      {
        iconname: 'quora',
        text: '答题榜',
      },
      {
        iconname: 'keyboard-o',
        text: '编程榜',
      },
      {
        iconname: 'thumbs-o-up',
        text: '牛币榜',
      }
    ];
    const listItems2 = data2.map((data) =>
      <Item
        key = {data.iconname}
        arrow="horizontal"
        onClick={() => hashHistory.push('/other/notdone')}
        >
          <span className="listspan"><FontAwesome name= {data.iconname} style={{ marginRight: "5%" }}/>{data.text}</span>
      </Item>
    );
    return (<div>
      <Tabs defaultActiveKey="1">
        <TabPane tab={ <span className="tabspan">动态</span> } key="1">
          <List>{listItems1}</List>
        </TabPane>
        <TabPane tab={ <span className="tabspan">排行榜</span> } key="2">
          <List>{listItems2}</List>
        </TabPane>
      </Tabs>
    </div>);
  }
}
