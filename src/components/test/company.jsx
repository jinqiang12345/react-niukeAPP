import React from 'react';
import { Tabs, Card } from 'antd-mobile';
import List from './list'
import FontAwesome from 'react-fontawesome';
const TabPane = Tabs.TabPane;
export default class company extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.changeNavTitle('公司真题套题');
  }
  render() {
    const photo = {width: "2.5rem",height: "1.5rem", marginRight: ".5rem"};
    const data = [
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
    const data1 = [
      {
      url: 'http://imgs.ebrun.com/resources/2017_04/2017_04_26/201704264801493194852581.jpg',
      title: '京东2017校招金融市场商务&金融风控方向笔试试卷',
      num: 73,
      people: 1
      },
      {
      url: 'http://imgs.ebrun.com/resources/2017_04/2017_04_26/201704264801493194852581.jpg',
      title: '京东2017校招职能方向笔试试卷',
      num: 108,
      people: 7
      },
      {
      url: 'http://www.baidu.com/img/bd_logo1.png',
      title: '欢聚时代2017校招笔试题目（PHP工程师类）C卷',
      num: 37,
      people: 49
      },
      {
      url: 'http://www.baidu.com/img/bd_logo1.png',
      title: '欢聚时代2017校招笔试题目（ios工程师类）C卷',
      num: 44,
      people: 18
      },
      {
      url: 'http://www.baidu.com/img/bd_logo1.png',
      title: '欢聚时代2017校招笔试题目（web前端类）C卷',
      num: 28,
      people: 176
      },
      {
      url: 'http://www.baidu.com/img/bd_logo1.png',
      title: '欢聚时代2017校招笔试题目（c++基础类）C卷',
      num: 24,
      people: 207
      },
      {
      url: 'http://www.baidu.com/img/bd_logo1.png',
      title: '欢聚时代2017校招笔试题目（产品类）C卷',
      num: 28,
      people: 45
      },
      {
      url: 'http://www.baidu.com/img/bd_logo1.png',
      title: '欢聚时代2017校招笔试题目（JAVA基础类）C卷',
      num: 23,
      people: 291
      }
    ];
    const CardItems1 = data1.map((data) =>
      <Card full>
        <Card.Header
          title={
          <span style={{ width: "50%"}}>
            <span style={{ fontSize: "70%"}}>
              <FontAwesome name='vimeo' style={{ color: "#148F77", marginRight: "5%", height: "100%"}}/>
              {data.title}
            </span>
            <br/>
            <span style={{ fontSize: "60%", color: "#4D5656" }}>
              <FontAwesome name='user-o' style={{ marginRight: "5%"}}/>
              已有{data.people}人参加
            </span>
            <br/>
            <span style={{ fontSize: "60%", color: "#4D5656" }}>
              <FontAwesome name='folder-o' style={{ marginRight: "5%"}}/>
              题目数量：{data.num}
            </span>
            <br/>
            <span style={{ fontSize: "60%", color: "#4D5656" }}>
              <FontAwesome name='flag-o' style={{ marginRight: "5%"}}/>
              难度
              <FontAwesome name='star' style={{ marginRight: "5%", marginLeft: "5%", color: "#E67E22"}}/>
              <FontAwesome name='star' style={{ marginRight: "5%", color: "#E67E22"}}/>
              <FontAwesome name='star' style={{ color: "#E67E22"}}/>
            </span>
          </span>
          }
          thumb={data.url}
          thumbStyle={photo}
        />
      </Card>
    );
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab={ <span className="tabspan">推荐</span> } key="1">
            {CardItems1}
          </TabPane>
          <TabPane tab={ <span className="tabspan">全部</span> } key="2">
            <List data={data}/>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
