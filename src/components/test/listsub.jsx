import React from 'react';
import {
   List
} from 'antd-mobile';
export default class list extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    const Item = List.Item;
    const Brief = Item.Brief;
    const listItems1 = this.props.data.map((data) =>
      <Item multipleLine>
        <span className="listspan">{data.text}</span>
        <Brief><span style={{ fontSize: "60%", color: "#4D5656" }}>{data.sub}</span></Brief>
      </Item>
    );
    return (
      <div>
        <List>{listItems1}</List>
      </div>
    );
  }
}
