import React from 'react';
import FontAwesome from 'react-fontawesome';
import {  hashHistory } from 'react-router';
import {
  Card, Grid, List, WhiteSpace
} from 'antd-mobile';
export default class Demo extends React.Component {
  componentDidMount() {
    this.props.changeTitle('我的');
  }
  render() {
    const menudata = [{icon: <span className= "gridspanicon">338</span>, text: <span className= "gridspantext">成就值</span>},
                  {icon: <span className= "gridspanicon">0</span>, text: <span className= "gridspantext">被采纳</span>},
                  {icon: <span className= "gridspanicon">0</span>, text: <span className= "gridspantext">获赞</span>},
                  {icon: <span className= "gridspanicon">334</span>, text: <span className= "gridspantext">答对题</span>},
                  {icon: <span className= "gridspanicon">2</span>, text: <span className= "gridspantext">编程通过</span>},];
    const photo = {width: "1.2rem",height: "1.2rem", borderRadius: "50%", marginRight: ".2rem"};
    const Item = List.Item;
    const data1 = [
      {
        iconname: 'file-text-o',
        text: '错题练习',
      },
      {
        iconname: 'window-close-o',
        text: '错题浏览',
      }
    ];
    const listItems1 = data1.map((data) =>
      <Item onClick={() => {hashHistory.push('/other/notdone')}}
        key={data.iconname} arrow="horizontal" extra={<span style={{ fontSize: "70%", color: "#145A32" }}></span>}>
        <span className="listspan"><FontAwesome name={data.iconname} style={{ marginRight: "5%" }}/>{data.text}</span>
      </Item>
    );
    const data2 = [
      {
        iconname: 'file-o',
        number: 68,
        text: '练习试卷',
      },
      {
        iconname: 'commenting-o',
        number: 0,
        text: '回答问题',
      },
      {
        iconname: 'edit',
        number: 0,
        text: '发表帖子',
      }
    ];
    const listItems2 = data2.map((data) =>
      <Item onClick={() => {hashHistory.push('/other/notdone')}}
        key={data.iconname} arrow="horizontal" extra={<span style={{ fontSize: "70%", color: "#145A32" }}>{data.number}</span>}>
        <span className="listspan"><FontAwesome name={data.iconname} style={{ marginRight: "5%" }}/>{data.text}</span>
      </Item>
    );
    const data3 = [
      {
        iconname: 'star-o',
        number: 0,
        text: '收藏题目',
      },
      {
        iconname: 'stack-exchange',
        number: 0,
        text: '收藏帖子',
      }
    ];
    const listItems3 = data3.map((data) =>
      <Item onClick={() => {hashHistory.push('/other/notdone')}}
        key={data.iconname} arrow="horizontal" extra={<span style={{ fontSize: "70%", color: "#145A32" }}>{data.number}</span>}>
        <span className="listspan"><FontAwesome name={data.iconname} style={{ marginRight: "5%" }}/>{data.text}</span>
      </Item>
    );
    return (
      <div>
        <Card full>
          <Card.Header
            title={<span style={{ width: "50%"}}><span style={{ color: "#145A32", fontSize: "80%"}}>笑场</span><br/><span style={{ fontSize: "60%", color: "#333" }}>
            <FontAwesome name='graduation-cap' style={{ color: "#145A32", marginRight: "5%"}}/>华北电力大学</span></span>}
            thumb="http://rescdn.qqmail.com/dyimg/20131220/7155BCB97148.jpg"
            thumbStyle={photo}
            extra={<FontAwesome onClick={() => {hashHistory.push('/other/me')}} style={{ fontSize: "120%"}} name='angle-right'/>}
          />
          <Card.Footer content={<span style={{ fontSize: "80%", color: "#145A32", marginLeft: "20%" }}>
                                <FontAwesome name='heart'
                                            style={{marginRight: "5%"}}
                                            />关注了 0人</span>}
                        extra={<span style={{ fontSize: "80%", color: "#145A32", marginRight: "20%" }}>
                                <FontAwesome name='user'
                                            style={{marginRight: "5%"}}
                                            />关注者 0人</span>} />
        </Card>
        <Grid data={menudata} columnNum={5} hasLine={false}/>
        <WhiteSpace size="xs" />
        <List>{listItems1}</List>
        <WhiteSpace size="xs" />
        <List>{listItems2}</List>
        <WhiteSpace size="xs" />
        <List>{listItems3}</List>


        <List className="listdiv">
            <Item onClick={() => {hashHistory.push('/other/notdone')}}
              arrow="horizontal" extra={<span style={{ fontSize: "70%", color: "#145A32" }}></span>}>
              <span className="listspan"><FontAwesome name='download' style={{ marginRight: "5%" }}/>我的下载</span>
            </Item>
            <WhiteSpace size="xs" />
            <Item onClick={() => {hashHistory.push('/other/notdone')}}
              arrow="horizontal" extra={<span style={{ fontSize: "70%", color: "#145A32" }}>4</span>}>
              <span className="listspan"><FontAwesome name='podcast' style={{ marginRight: "5%" }}/>我的打卡</span>
            </Item>
            <WhiteSpace size="xs" />
            <Item align="middle" onClick={() => { hashHistory.push('/other/setting'); }}>
              <div className="listspan" style={{  width: "100%", textAlign: "center" }}>设置</div>
            </Item>
          </List>
      </div>
    );
  }
}
