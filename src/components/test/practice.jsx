import React from 'react';
import FontAwesome from 'react-fontawesome';
import {  hashHistory } from 'react-router';
import { Accordion, List } from 'antd-mobile';
export default class practice extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Item = List.Item;
    const Brief = Item.Brief;
    const data1 = [
      {
        title: 'HTML/CSS',
        num: 221,
        done: 221
      },
      {
        title: 'C#',
        num: 30,
        done: 0
      },
      {
        title: 'Javascript',
        num: 190,
        done: 190
      },
      {
        title: 'Java',
        num: 935,
        done: 115
      },
      {
        title: 'C/C++',
        num: 2300,
        done: 8
      }
    ];
    const dataconstructor = [
      {
        title: '数组',
        num: 303,
        done: 1
      },
      {
        title: '字符串#',
        num: 80,
        done: 1
      },
      {
        title: '链表',
        num: 343,
        done: 1
      },
      {
        title: '栈',
        num: 297,
        done: 0
      },
      {
        title: '队列',
        num: 167,
        done: 0
      },
      {
        title: '树',
        num: 730,
        done: 10
      },
      {
        title: '图',
        num: 331,
        done: 0
      },
      {
        title: '哈希',
        num: 88,
        done: 1
      },
      {
        title: '堆',
        num: 61,
        done: 1
      }
    ];
    const dataalogorithm = [
      {
        title: '查找',
        num: 159,
        done: 11
      },
      {
        title: '排序',
        num: 396,
        done: 1
      },
      {
        title: '递归',
        num: 31,
        done: 0
      },
      {
        title: '复杂度',
        num: 242,
        done: 2
      },
      {
        title: '高级算法',
        num: 64,
        done: 0
      }
    ];
    const listItems1 = data1.map((data) =>
      <Item arrow="horizontal" multipleLine extra={<span style={{ fontSize: "70%", color: "#148F77" }}>练习</span>}>
        <span style={{ fontSize: "70%" }}>{data.title}</span> <Brief><span style={{ fontSize: "60%" }}>共{data.num}题 | 已练习{data.done}题</span></Brief>
      </Item>
    );
    const listItems2 = dataconstructor.map((data) =>
      <Item arrow="horizontal" multipleLine extra={<span style={{ fontSize: "70%", color: "#148F77" }}>练习</span>}>
        <span style={{ fontSize: "70%" }}>{data.title}</span> <Brief><span style={{ fontSize: "60%" }}>共{data.num}题 | 已练习{data.done}题</span></Brief>
      </Item>
    );
    const listItems3 = dataalogorithm.map((data) =>
      <Item arrow="horizontal" multipleLine extra={<span style={{ fontSize: "70%", color: "#148F77" }}>练习</span>}>
        <span style={{ fontSize: "70%" }}>{data.title}</span> <Brief><span style={{ fontSize: "60%" }}>共{data.num}题 | 已练习{data.done}题</span></Brief>
      </Item>
    );
    return (
      <div>
        <Accordion>
          <Accordion.Panel header={<span style={{ fontSize: "70%" }}>编程语言</span>}>
            <List>{listItems1}</List>
          </Accordion.Panel>
          <Accordion.Panel header={<span style={{ fontSize: "70%" }}>数据结构</span>}>
            <List>{listItems2}</List>
          </Accordion.Panel>
          <Accordion.Panel header={<span style={{ fontSize: "70%" }}>算法</span>}>
            <List>{listItems3}</List>
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}
