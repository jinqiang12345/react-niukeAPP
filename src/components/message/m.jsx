import React from 'react';
/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { RefreshControl, ListView } from 'antd-mobile';

const data = [
  {
    img: 'http://www.gx8899.com/uploads/allimg/160804/3-160P4111639.jpg',
    des: '小西',
    text: '好的！感谢您的分享~',
  },
  {
    img: 'http://img.wowoqq.com/allimg/170603/1-1F603064500-51.jpg',
    des: 'geek',
    text: 'Hi',
  },
  {
    img: 'http://pic.3h3.com/up/2014-8/20148825251350515758.jpg',
    des: 'bluce',
    text: 'hao are you',
  },
];
let index = data.length - 1;

let pageIndex = 0;

export default class m extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.initData = [];
    for (let i = 0; i < 3; i++) {
      this.initData.push(`r${i}`);
    }
    this.state = {
      dataSource: dataSource.cloneWithRows(this.initData),
      refreshing: false,
      height: document.documentElement.clientHeight,
    };
  }
  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }
  componentDidMount() {
    this.manuallyRefresh = true;
    setTimeout(() => this.setState({ refreshing: true }), 10);

    // Set the appropriate height
    setTimeout(() => this.setState({
      height: this.state.height - ReactDOM.findDOMNode(this.refs.lv).offsetTop,
    }), 0);

    // handle https://github.com/ant-design/ant-design-mobile/issues/1588
    this.refs.lv.getInnerViewNode().addEventListener('touchstart', this.ts = (e) => {
      this.tsPageY = e.touches[0].pageY;
    });
    this.refs.lv.getInnerViewNode().addEventListener('touchmove', this.tm = (e) => {
      this.tmPageY = e.touches[0].pageY;
      if (this.tmPageY > this.tsPageY && this.st <= 0 && document.body.scrollTop > 0) {
        console.log('start pull to refresh');
        this.domScroller.options.preventDefaultOnTouchMove = false;
      } else {
        this.domScroller.options.preventDefaultOnTouchMove = undefined;
      }
    });
  }
  componentWillUnmount() {
    this.refs.lv.getInnerViewNode().removeEventListener('touchstart', this.ts);
    this.refs.lv.getInnerViewNode().removeEventListener('touchmove', this.tm);
  }
  onScroll = (e) => {
    this.st = e.scroller.getValues().top;
    this.domScroller = e;
  }
  onRefresh = () => {
    console.log('onRefresh');
    if (!this.manuallyRefresh) {
      this.setState({ refreshing: true });
    } else {
      this.manuallyRefresh = false;
    }
    setTimeout(() => {
      this.initData = [`ref${pageIndex++}`, ...this.initData];
      this.setState({
        // dataSource: this.state.dataSource.cloneWithRows(this.initData),
        refreshing: false,
      });
    }, 1000);
  };
  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID}
          style={{
            padding: '0.08rem 0.16rem',
            backgroundColor: 'white',
          }}
        >
          <div style={{ display: '-webkit-box', display: 'flex' }}>
            <img style={{ height: '0.88rem', marginRight: '0.28rem', borderRadius: '50%' }} src={obj.img} alt="icon" />
            <div style={{ display: 'inline-block' }}>
              <div style={{ margin: '0.1rem 0 0.2rem 0' }}><span style={{ fontSize: "70%", color: "#145A32" }}>{obj.des}</span></div>
              <div><span style={{ fontSize: "60%", color: "#979A9A" }}>{obj.text}</span></div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <ListView
        ref="lv"
        dataSource={this.state.dataSource}
        renderRow={row}
        renderSeparator={separator}
        initialListSize={5}
        pageSize={5}
        scrollRenderAheadDistance={200}
        scrollEventThrottle={20}
        style={{
          height: this.state.height,
          border: '1px solid #ddd',
          margin: '0 0 0.1rem 0',
        }}
        scrollerOptions={{ scrollbars: true }}
        refreshControl={<RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
        />}
        onScroll={this.onScroll}
      />
    );
  }
}
