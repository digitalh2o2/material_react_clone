import React from 'react';
import Nav from './Nav';
import Profile from './Profile';

class Portfolio extends React.Component{
  render(){
    return(
      <div>
        <Nav value={2}/>
        <Profile />
      </div>
    )
  }
};

export default Portfolio;
