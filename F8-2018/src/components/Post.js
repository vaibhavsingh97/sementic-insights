import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Comment from './Comment';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    var Comments = '';
    if (this.props.data.comments) {
      Comments = this.props.data.comments.data.map(function (comment, index) {
        return (
          <Comment key={index} data={comment}/>
        );
      }, this);
    }

    return (
      <Card style={{margin: 10}}>
        <CardHeader title={this.props.data.message}/>
        <CardText>{Comments}</CardText>
      </Card>
    );
  }
}

export default Post;
