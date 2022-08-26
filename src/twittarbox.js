import React from "react";
import { Button, Form, Container, CloseButton } from 'react-bootstrap';
import { postTweet } from "./api";

export class TwittarBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tweet: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      let len = event.target.value.length;
      if (len > 140) {
        event.target.value = event.target.value.substring(0, 140);
        alert("You have exceeded the maximum number of characters");
      }
      this.setState({ tweet: event.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      let tweet = this.state.tweet;
      let response = postTweet(tweet);
      response.then(data => {
        if (data.success) {
          alert(`Tweet ${tweet} posted successfully`);
        } else {
          alert(data.message);
        }
      });
  
      response.catch(err => {
        alert(err);
        console.log(err);
      });
    }
  
    render() {
      return (
        <Container className="border">
          <div>
            <CloseButton />
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control onChange={(event) => this.handleChange(event)} placeholder="What's happening?" as="textarea" rows={3} />
              </Form.Group>
              <Button type="submit" className="float-right" variant="primary" size="lg">
                Tweet
              </Button>
            </Form>
          </div>
        </Container>
      )
    }
  }