import React from 'react';
import {   hashHistory } from 'react-router';
import M from './m'
import { NavBar, SearchBar, Popover, Icon } from 'antd-mobile';
import FontAwesome from 'react-fontawesome';
const Item = Popover.Item;
export default class sendmessage extends React.Component {
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    this.setState({
      visible: true,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
    let offsetX = -10; // just for pc demo
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
        offsetX = -26;
      }
    return (
      <div>
        <NavBar
          onLeftClick={() => hashHistory.goBack()}
          style={{ background: '#333', color: '#fff' }}
          rightContent={
            <Popover mask
              overlayClassName="fortest"
              overlayStyle={{ color: 'currentColor' }}
              visible={this.state.visible}
              overlay={[
                (<Item key="4" value="scan" icon={<FontAwesome name='github' />} data-seed="logId"><span style={{ fontSize: "80%" }}>Github</span></Item>),
                (<Item key="5" value="special" icon={<FontAwesome name='google-plus' />} style={{ whiteSpace: 'nowrap' }}><span style={{ fontSize: "80%" }}>Google</span></Item>),
                (<Item key="6" value="button ct" icon={<FontAwesome name='question-circle-o' />}>
                  <span style={{ fontSize: "80%", marginRight: 5}}>帮助</span>
                </Item>)
                ]}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [offsetX, 15],
              }}
              onVisibleChange={this.handleVisibleChange}
              onSelect={this.onSelect}
            >
              <div style={{
                height: '100%',
                padding: '0 0.3rem',
                marginRight: '-0.3rem',
                display: 'flex',
                alignItems: 'center',
                }}
              >
                <Icon type="ellipsis" />
              </div>
            </Popover>
          }
        >
          <span style={{ fontSize: "80%", fontWeight: "lighter"}}>私信</span>
        </NavBar>
        <SearchBar
          autoFocus
          placeholder="搜索"
          />
        <M />
      </div>
    );
  }
}
