import React from 'react';
import {
   List
} from 'antd-mobile';
export default class listsub extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    const Item = List.Item;
    const listItems1 = this.props.data.map((data) =>
      <Item extra={<span className="listspan">{data.num}套</span>}>
        <span className="listspan">{data.text}</span>
      </Item>
    );
    return (
      <div>
        <List>{listItems1}</List>
      </div>
    );
  }
}
