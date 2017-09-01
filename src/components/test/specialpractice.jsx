import React from 'react';
import Practice from './practice'
export default class company extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.changeNavTitle('公司真题套题');
  }
  render() {
    return (
      <div>
        <Practice />
      </div>
    );
  }
}
