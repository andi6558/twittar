import logo from './logo.svg';
import './App.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


import { UserLoginBox, UserSignupBox } from './authentication';
import { TwittarBox } from './twittarbox';
import { Feeds } from './feeds';




class App extends React.Component {
  render() {
    return (
      <div>
        <UserSignupBox />
        <UserLoginBox />
        <TwittarBox></TwittarBox>
        <Feeds></Feeds>
      </div>
    )
  }
}

export default App;
