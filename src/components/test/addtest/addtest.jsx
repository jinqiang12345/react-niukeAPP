import React from 'react';
import {
  List, WhiteSpace, Button, WingBlank, DatePicker
} from 'antd-mobile';
import { createForm } from 'rc-form';

class addtest extends React.Component {
  componentDidMount() {
    this.props.changeNavTitle('添加事件');
  }
  render(props) {
  const { getFieldProps } = this.props.form;
    const Item = List.Item;
    return (
    <div>
      <List>
        <Item arrow="horizontal" extra={<span style={{ fontSize: "70%", color: "#148F77" }}></span>}>
          <span className="listspan">公司</span>
        </Item>
        <DatePicker
          mode="date"
          title="选择日期"
          extra=""
          {...getFieldProps('date1', {
          })}
        >
          <Item arrow="horizontal" extra={<span style={{ fontSize: "70%", color: "#148F77" }}></span>}>
            <span className="listspan">考试日期</span>
          </Item>
        </DatePicker>
        <WhiteSpace size="xs" />
        <DatePicker mode="time" title="选择开始时间" extra="" {...getFieldProps('time1')}>
          <Item arrow="horizontal" extra={<span style={{ fontSize: "70%", color: "#148F77" }}></span>}>
            <span className="listspan">考试开始时间</span>
          </Item>
        </DatePicker>
        <WhiteSpace size="xs" />
        <DatePicker mode="time" title="选择结束时间" extra="" {...getFieldProps('time2')}>
          <Item arrow="horizontal" extra={<span style={{ fontSize: "70%", color: "#148F77" }}></span>}>
            <span className="listspan">考试结束时间</span>
            </Item>
        </DatePicker>
        <Item arrow="horizontal" extra={<span style={{ fontSize: "70%", color: "#148F77" }}>在线笔试</span>}>
          <span className="listspan">考试形式</span>
        </Item>

      </List>
      <WhiteSpace size="xl" />
      <WhiteSpace size="xl" />
      <WingBlank>
        <Button className="btn" style={{ backgroundColor: "#148F77"}}>
          <span style={{fontSize: "80%", color: "#fff"}}>保存</span>
        </Button>
      </WingBlank>
    </div>);
  }
}
export default  createForm()(addtest);
