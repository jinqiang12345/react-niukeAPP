import React from 'react';
import { Tabs } from 'antd-mobile';
import Practice from './practice'
import List from './list'

const TabPane = Tabs.TabPane;
export default class specialpractice extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.changeNavTitle('题目查看讨论');
  }
  render() {
  const data1 = [
    {
      text: '百度',
      num: 18
    },
    {
      text: '腾讯',
      num: 22
    },
    {
      text: '去哪儿',
      num: 2
    },
    {
      text: '人人网',
      num: 6
    },
    {
      text: '微博',
      num: 1
    },
    {
      text: '阿里巴巴',
      num: 22
    },
    {
      text: '携程',
      num: 2
    },
    {
      text: '盛大',
      num: 1
    },
    {
      text: '奇虎',
      num: 9
    },
    {
      text: 'google',
      num: 3
    },
    {
      text: '微软',
      num: 2
    },
    {
      text: '小米',
      num: 2
    },
    {
      text: '搜狐',
      num: 7
    },
    {
      text: '网易',
      num: 18
    },
    {
      text: '京东',
      num: 23
    },
    {
      text: '迅雷',
      num: 4
    },
    {
      text: '楚楚街',
      num: 2
    },
    {
      text: '滴滴',
      num: 14
    },
    {
      text: '蘑菇街',
      num: 3
    },
    {
      text: '58同城',
      num: 3
    },
    {
      text: '英特尔',
      num: 1
    },
    {
      text: '乐视网',
      num: 2
    },
    {
      text: '完美世界',
      num: 4
    },
    {
      text: '欢聚时代',
      num: 22
    }
  ];
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab={ <span className="tabspan">知识点</span> } key="1">
            <Practice />
          </TabPane>
          <TabPane tab={ <span className="tabspan">公司</span> } key="2">
            <List  data={data1}/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
