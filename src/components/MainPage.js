import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs'
import Profile from './Profile';
import Hello from './Hello';

class MainPage extends React.Component{
  render(){
    return(
        <div>
          <Profile />
          <Hello />
        </div>
    )
  }
}

export default MainPage;
