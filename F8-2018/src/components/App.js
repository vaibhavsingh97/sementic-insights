import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Post from './Post';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    var url = "https://graph.facebook.com/v3.0/1455129594749895/feed?fields=comments%7Bmessage%2Ccomments%7D%2Cmessage&access_token=EAAf6lNQsqtQBAFKtordGA5ElpF4ZAgjpkP9IfnfmNWTCcdZAwBKNwYEVwdkaaqC6rFZBu9djZALnAgAp0a1d3hXfZA49vkjMJDHjZCOE0n24P4jcJsWDZB4yu5NC4drLPJSU25VhqUMBaFfzTEaqgYBTZCX7YLXTjdjemgjNwzGtE1iW0JhqU9BHyHNt6gOhEyVqeoKGT9YW0AZDZD";
    var self = this;
    fetch(url)
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then(function(data) {
            self.setState({
              data: data.data
            });
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }

  render() {
    var Posts = this.state.data.map(function (post, index) {
      return (
        <Post key={index} data={post}/>
      );
    }, this);


    return (
      <div style={{marginTop: 80}}>
        <AppBar title="Content Sentiment Analysis" style={{ position: "fixed", top: 0 }} />
        {Posts}
      </div>
    );
  }
}

export default App;
