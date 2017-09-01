import React from 'react';
import { WhiteSpace } from 'antd-mobile';
export default class notdone extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.changeNavTitle('什么都没有');
  }
  render() {
    return (
      <div>
        <WhiteSpace size="xl"/>
        <WhiteSpace size="xl"/>
        <div onClick={() => {hashHistory.push('/other/addtest')} } style={{ margin: "0 auto", borderRadius: "50%", width: "1rem", height: "1rem", color: "#fff",
        backgroundColor: "#148F77", textAlign: "center", lineHeight: "1rem", fontSize: ".4rem", opacity: ".8"}}>!</div>
        <WhiteSpace size="lg"/>
        <div style={{width: "100%", color: "#148F77", textAlign: "center"}}>敬请期待</div>
      </div>
    );
  }
}
