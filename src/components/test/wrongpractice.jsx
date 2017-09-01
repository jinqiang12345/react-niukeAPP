import React from 'react';
import Practice from './practice'
export default class wrongpractice extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.changeNavTitle('错题练习');
  }
  render() {
    return (
      <div>
        <Practice />
      </div>
    );
  }
}
