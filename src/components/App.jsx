import React from 'react';
import {   hashHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { NavBar, Drawer, SearchBar, TabBar, Icon } from 'antd-mobile';
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '牛客',
      selectedTab: 'blueTab',
      label: 'cog'
    };
  }
  render() {
    // console.log(this.props.route, this.props.params, this.props.routeParams);
    return (
      <div className="container">
        <NavBar
          iconName="false"
          style={{ background: '#333', color: '#fff' }}
          rightContent={[
              <span style={{ fontSize: "80%", fontWeight: "lighter" ,opacity: "0.6"}}><FontAwesome name='moon-o' style={{ marginRight: '0.4rem' }}/></span>,
              <span style={{ fontSize: "80%", fontWeight: "lighter" }} onClick={() => hashHistory.push('/sendmessage')}><FontAwesome name='paper-plane-o' /></span>,
            ]}
        >
          <span style={{ fontSize: "80%", fontWeight: "lighter"}}>{this.state.title}</span>
        </NavBar>

        <div style={{ position: 'relative', height: '80%' }}>
            {this.props && this.props.children && React.cloneElement(this.props.children, {
              changeTitle: title => this.setState({ title })
            }) || 'no content'}

        </div>
        <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title={<span style={{ color: "#333" }}>学习</span>}
          key="learn"
          icon={<FontAwesome name='pencil-square-o'/>
          }
          selectedIcon={<FontAwesome name='pencil-square-o' style={{ color: "#333" }}/>
          }
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
            hashHistory.push('/')
          }}
          data-seed="logId"
        >
        </TabBar.Item>
        <TabBar.Item
          icon={<FontAwesome name='hand-spock-o'/>}
          selectedIcon={<FontAwesome name='hand-spock-o' style={{ color: "#333" }}/>}
          title={<span style={{ color: "#333" }}>社区</span>}
          key="community"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
            hashHistory.push('/s2')
          }}
          data-seed="logId1"
        >
        </TabBar.Item>
        <TabBar.Item
          icon={<FontAwesome name='commenting-o'/>}
          selectedIcon={<FontAwesome name='commenting-o' style={{ color: "#333" }}/>}
          title={<span style={{ color: "#333" }}>消息</span>}
          key="message"
          dot
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
            hashHistory.push('/s3')
          }}
        >
        </TabBar.Item>
        <TabBar.Item
          icon={<FontAwesome name='user-o'/>}
          selectedIcon={<FontAwesome name='user-o' style={{ color: "#333" }}/>}
          title={<span style={{ color: "#333" }}>我的</span>}
          key="me"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
            hashHistory.push('/s4')
          }}
        >
        </TabBar.Item>
      </TabBar>


        {/*<div className="fixed-bottom">底部固定条</div>*/}
      </div>
    );
  }
}
