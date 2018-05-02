import React, {Component} from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        SentimentScore: {
          Positive: 0,
          Negative: 0
        }
      },
      keywords: [],
    };
  }

  componentWillMount() {
    var url = "http://fbsentiment-dev.ap-south-1.elasticbeanstalk.com/detect_sentiment";
    var self = this;
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/html',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: this.props.data.message
      })
    })
      .then(
        function (response) {
          /*if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }*/
          response.json().then(function (data) {
            self.setState({
              data: data
            });
          });
        }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });

    url = "http://fbsentiment-dev.ap-south-1.elasticbeanstalk.com/key_phrases";
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/html',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: this.props.data.message
      })
    })
      .then(
        function (response) {
          /*if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }*/
          response.json().then(function (data) {
            self.setState({
              keywords: data
            });
            console.log(self.state.keywords.KeyPhrases);
          });
        }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
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

    var Keywords = '';
    if (this.state.keywords.KeyPhrases) {
      Keywords = this.state.keywords.KeyPhrases.map(function (keyword, index) {
        return (
          <Chip style={{display: 'inline-flex', marginRight: 5, marginBottom: 10}}><Avatar size={32}>{index + 1}</Avatar>{keyword.Text}</Chip>
        );
      }, this);
    }

    return (
      <div style={{border: 1, borderStyle: 'groove'}}>
      <ul style={{listStyle: 'none', padding: 15}}>
        <li>{this.props.data.message}</li><br />
          {Keywords}<br />
          <b>Positive</b>
          <LinearProgress mode="determinate" value={parseInt(this.state.data.SentimentScore.Positive * 100, 10)} color='#2E86C1' style={{height: 10}} />
          <b>Negative</b>
          <LinearProgress mode="determinate" value={parseInt(this.state.data.SentimentScore.Negative * 100, 10)} color='red' style={{height: 10}}/>
        <br />{Comments}
      </ul>
      </div>
    );
  }
}

export default Comment;
