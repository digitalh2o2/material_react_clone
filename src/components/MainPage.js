import React from 'react';
import Nav from './Nav';
import Profile from './Profile';
import Hello from './Hello';

class MainPage extends React.Component{
  render(){
    return(
        <div>
          <Nav value={0}/>
          <Profile />
          <Hello />
        </div>
    )
  }
}

export default MainPage;
