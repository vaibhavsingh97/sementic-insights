import React, {Component} from 'react';

class InnerComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div>{this.props.data.message}</div>
    );
  }
}

export default InnerComment;
