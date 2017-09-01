import React from 'react';
import M from './message/m';

export default class menumessage extends React.Component {
  componentDidMount() {
    this.props.changeTitle('消息');
  }
  render() {
      return (
        <M />
    );
  }
}
