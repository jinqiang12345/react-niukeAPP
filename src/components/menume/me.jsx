import React from 'react';
import {
  List, WhiteSpace
} from 'antd-mobile';

export default class me extends React.Component {
  componentDidMount() {
    this.props.changeNavTitle('完善信息');
  }
  render() {
    const Item = List.Item;
    return (
    <div>
      <List>
        <Item extra={<img src="http://rescdn.qqmail.com/dyimg/20131220/7155BCB97148.jpg"
          style={{width: "1.5em",height: ".5rem", borderRadius: "50%", marginRight: ".2rem"}}/>}>
          <span className="listspan">头像</span>
        </Item>
        <Item arrow="horizontal" extra={<span style={{ fontSize: "70%" }}>笑场</span>}>
          <span className="listspan">昵称</span>
        </Item>
        <WhiteSpace size="xs" />
        <Item arrow="horizontal" extra={<span style={{ fontSize: "70%" }}>华北电力大学</span>}>
          <span className="listspan">学校</span>
        </Item>
        <Item arrow="horizontal" extra={<span style={{ fontSize: "70%" }}>阿里巴巴</span>}>
          <span className="listspan">想去的公司</span>
        </Item>
        <WhiteSpace size="xs" />
        <Item arrow="horizontal" extra={<span style={{ fontSize: "70%" }}>前端工程师</span>}>
          <span className="listspan">从事的工作</span>
        </Item>
      </List>
    </div>);
  }
}
