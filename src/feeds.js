import React from "react";
import { getTweets } from "./api";
import { Container, CloseButton } from 'react-bootstrap';

function Feed(props) {
    return (
      <Container>
        <div className="border">
          <div className="float-right">
            <CloseButton />
          </div>
          {/* <div className="float-left">
            <img src={logo} className="App-logo" alt="logo" />
          </div> */}
          <div className="float-left">
            <h5>
              <strong>
                <a href="#">
                  @{props.name}
                </a>
              </strong>
            </h5>
            <p>
              {props.tweet}
            </p>
          </div>
        </div>
      </Container>
    )
  }
  
export class Feeds extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        feeds: [],
      };
    }
    createFeed(name, tweet, key) {
      return (
        <Feed key = {key} name={name} tweet={tweet} />
      )
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      if (this.state.feeds.length === 0) {
        let response = getTweets();
        response.then(data => {
          this.setState({ feeds: data });
        }).catch(err => {
          alert(err);
          console.log(err);
        }).finally(() => {
          console.log(this.state.feeds);
        });
      }
      
      // turn the feeds into a list of Feeds
      let feeds = this.state.feeds.map((feed, index) => {
        return (
          this.createFeed(feed.user, feed.text, index)
        )
      }).reverse();
  
      return (
        <div>
          {feeds}
          {this.createFeed("John", "Hello World!")}
          {this.createFeed("Joe Biden", "I am the best")}
          {this.createFeed("Donald Trump", "I am the worst")}
        </div>
      )
    }
  
  }