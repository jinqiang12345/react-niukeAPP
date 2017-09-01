import React from 'react';
import { RefreshControl, ListView, Carousel, SwipeAction, Button, Grid, Icon, List, WingBlank } from 'antd-mobile';
import './menulearn.less';
import FontAwesome from 'react-fontawesome';
import {   hashHistory } from 'react-router';
import Design from './design/design'
export default class menulearn extends React.Component {
  state = {
    data: ['', '', ''],
    initialHeight: 200,
  }
  handleClick = (e) => {
      if(e.key == 1){
          hashHistory.push('/other/specialpractice');
      }else if(e.key == 2){
          hashHistory.push('/other/company');
      }else if(e.key == 3){
          hashHistory.push('/other/wrongpractice');
      }else if(e.key == 4){
          hashHistory.push('/other/lesson');
      }else if(e.key == 5){
          hashHistory.push('/other/question');
      }else if(e.key == 6){
          hashHistory.push('/other/special');
      }
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
    this.props.changeTitle('学习');
  }

  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    const data1 = [
                    {icon: <span className="iconspan"><FontAwesome name='calendar-minus-o'/></span>, text: <span className="gridspan">专项练习</span>, key: 1},
                    {icon: <span className="iconspan"><FontAwesome name='building-o'/></span>, text: <span className="gridspan">公司套题</span>, key: 2},
                    {icon: <span className="iconspan"><FontAwesome name='window-close-o'/></span>, text: <span className="gridspan">错题练习</span>, key: 3},
                    {icon: <span className="iconspan"><FontAwesome name='bookmark-o'/></span>, text: <span className="gridspan">课程学习</span>, key: 4},
                    {icon: <span className="iconspan"><FontAwesome name='object-group'/></span>, text: <span className="gridspan">大题查看</span>, key: 5},
                    {icon: <span className="iconspan"><FontAwesome name='universal-access'/></span>, text: <span className="gridspan">精华专题</span>, key: 6},
                  ];
    const Item = List.Item;
    return (
      <div>
        <div className="carouseldiv">
          <Carousel
            className="my-carousel"
            autoplay={true}
            infinite
            selectedIndex={1}
            swipeSpeed={35}
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
            >
              {this.state.data.map(ii => (
                <a href="#" key={ii} style={hProp}>
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}
                  alt="icon"
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({
                      initialHeight: null,
                    });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </div>
          <Design />
          <Grid data={data1} key={data1.key} columnNum={3} style={{ fontSize: "12px" }} onClick={this.handleClick}/>
        <div className="listdiv">
          <List>
            <Item
              arrow="horizontal"
              onClick={() => {hashHistory.push('/other/testcalendar')}}
              ><FontAwesome name='calendar' style={{ marginRight: "5%", borderLeft: "10px solid #148F77", paddingLeft: "2%", fontSize: "70%" }}/>
              <span className="gridspan">笔试日历</span></Item>
          </List>
          <WingBlank>
          <List renderHeader={() => <span className="gridspan">我参与的课程</span>} className="my-list">
            <Item onClick={() => {hashHistory.push('/other/notdone')}}
              extra={<span className="lessonspan">'1481163人学习'</span>} onLongPress={this.handleLongPress}><span className="gridspan">基础算法在面试题中的应用</span></Item>
            <Item onClick={() => {hashHistory.push('/other/notdone')}}
              extra={<span className="lessonspan">'1163人学习'</span>} onLongPress={this.handleLongPress}><span className="gridspan">Git&Github入门基础</span></Item>
            <Item onClick={() => {hashHistory.push('/other/notdone')}}
              extra={<span className="lessonspan">'2661163人学习'</span>} onLongPress={this.handleLongPress}><span className="gridspan">剑指Offer</span></Item>
          </List>
          </WingBlank>
        </div>
      </div>
    );
  }
}
