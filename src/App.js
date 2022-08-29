import logo from './logo.svg';
import './App.css';
import React from 'react';


import { UserLoginBox, UserSignupBox } from './authentication';
import { TwittarBox } from './twittarbox';
import { Feeds } from './feeds';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
  }
  handleLogin = (username) => {
    if (!username) {
      localStorage.removeItem('token');
    }
      this.setState({
        username: username,
      })
  }
  render() {
    return (
      <div>
        <UserSignupBox username={this.state.username} handleLogin={this.handleLogin} />
        <UserLoginBox username={this.state.username} handleLogin={this.handleLogin} />
        <TwittarBox></TwittarBox>
        <Feeds></Feeds>
      </div>
    )
  }
}

export default App;
