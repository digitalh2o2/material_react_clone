import React from 'react';
import Nav from './Nav';
import Profile from './Profile';

class Resume extends React.Component{
  render(){
    return(
      <div>
        <Nav value={1}/>
        <Profile />
        Resume
      </div>
    )
  }
};

export default Resume;
