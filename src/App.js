import logo from './logo.svg';
import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';

class UserLoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      show: false,
    };
  }
  handleClose = () => {
    this.setState({ show: false });
  }
  handleShow = () => {
    this.setState({ show: true });
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Login
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="username" value={this.state.username} onChange={this.handleChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

class TwittarBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let len = event.target.value.length;
    if (len > 140) {
      event.target.value = event.target.value.substring(0, 140);
      alert("You have exceeded the maximum number of characters");
    }
    // this.setState({
    //   value: event.target.value
    // });
  }

  render() {
    return (
      <Container className="border">
        <div>
          <CloseButton />
          <Form.Group className="mb-3">
            <Form.Control onChange={(event) => this.handleChange(event)} placeholder="What's happening?" as="textarea" rows={3} />
          </Form.Group>
          <Button className="float-right" variant="primary" size="lg" block>
            Tweet
          </Button>
        </div>
      </Container>
    )
  }
}

function Right() {
  return (
    <div>
      <div className="float-left">Float left on all viewasdsadasdasdasdasport sizes</div><br />
      <div className="float-right">Float right on all viewport sizes</div><br />
      <div className="float-none">Don't float on all viewport sizes</div><br />
    </div>
  )
}

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

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // the list of feeds
      feeds: ["Hello", "World", "!"]
    }
  }
  createFeed(name, tweet) {
    return (
      <Feed name={name} tweet={tweet} />
    )
  }

  render() {
    // let htmlfeeds = this.state.feeds.map((feed, index) => {
    //   return (
    //     <div key={index}>
    //       <p>{feed}</p>
    //     </div>
    //   )
    // });
    return (
      <div>
        {this.createFeed("John", "Hello World!")}
        {this.createFeed("Joe Biden", "I am the best")}
        {this.createFeed("Donald Trump", "I am the worst")}
        <Right></Right>
      </div>
    )
  }

}

class App extends React.Component {
  render() {
    return (
      <div>
        <UserLoginBox />
        <TwittarBox></TwittarBox>
        <Feeds></Feeds>
      </div>
    )
  }
}

export default App;
