import React from 'react';
import M from './m';
/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */

export default class othermessage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.changeNavTitle('消息');
  }
  render() {
    return (
      <div>
        <M />
      </div>
    );
  }
}
