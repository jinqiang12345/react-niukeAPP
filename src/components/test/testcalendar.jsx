import React from 'react';
import Listsub from './listsub'
import { hashHistory } from 'react-router';
export default class testcalendar extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.changeNavTitle('笔试日历');
  }
  render() {
  const data = [
    {
      text: '拼多多',
      sub: '09月02日 15：00 - 17：00'
    },
    {
      text: '百度内推',
      sub: '09月02日 19：00 - 21：00'
    },
    {
      text: 'CVTE第二场',
      sub: '09月02日 19：00 - 20：30'
    },
    {
      text: '链家网',
      sub: '09月02日 19：00 - 21：00'
    },
    {
      text: '华为',
      sub: '09月06日 19：00 - 21：30'
    },
    {
      text: '拼多多',
      sub: '09月02日 15：00 - 17：00'
    },
    {
      text: '百度内推',
      sub: '09月02日 19：00 - 21：00'
    },
    {
      text: 'CVTE第二场',
      sub: '09月02日 19：00 - 20：30'
    },
    {
      text: '链家网',
      sub: '09月02日 19：00 - 21：00'
    },
    {
      text: '华为',
      sub: '09月06日 19：00 - 21：30'
    },
    {
      text: '拼多多',
      sub: '09月02日 15：00 - 17：00'
    },
    {
      text: '百度内推',
      sub: '09月02日 19：00 - 21：00'
    },
    {
      text: 'CVTE第二场',
      sub: '09月02日 19：00 - 20：30'
    },
    {
      text: '链家网',
      sub: '09月02日 19：00 - 21：00'
    },
    {
      text: '华为',
      sub: '09月06日 19：00 - 21：30'
    },
  ];
    return (
      <div>
        <Listsub data={data} />
        <div onClick={() => {hashHistory.push('/other/addtest')} } style={{ position: "fixed", bottom: ".3rem", right: ".3rem", borderRadius: "50%", width: "1rem", height: "1rem", color: "#fff",
        backgroundColor: "#148F77", textAlign: "center", lineHeight: "1rem", fontSize: ".4rem", opacity: ".8"}}>+</div>
      </div>
    );
  }
}
