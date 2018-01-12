import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs'
import Nav from './Nav';
import Profile from './Profile';
import Hello from './Hello';

class MainPage extends React.Component{
  render(){
    return(
        <div>
          <Nav />
          <Profile />
          <Hello />
        </div>
    )
  }
}

export default MainPage;
