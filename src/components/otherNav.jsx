import React from 'react';
import {  hashHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { NavBar } from 'antd-mobile';
export default class otherNav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
    };
  }
  render() {
    return (
      <div className="container">
        <NavBar
          onLeftClick={() => hashHistory.goBack()}
          style={{ background: '#333', color: '#fff' }}
          rightContent={[
            <span style={{ fontSize: "80%", fontWeight: "lighter", color: "#148F77"}} onClick={() => hashHistory.push('/other/message')}><FontAwesome name='bell-o' /></span>
          ]}
        >
          <span style={{ fontSize: "80%", fontWeight: "lighter"}}>{this.state.title}</span>
        </NavBar>
        <div style={{ position: 'relative', height: '80%' }}>
            {this.props && this.props.children && React.cloneElement(this.props.children, {
              changeNavTitle: title => this.setState({ title })
            }) || 'no content'}

        </div>
      </div>
    );
  }
}
