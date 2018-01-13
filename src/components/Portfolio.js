import React from 'react';
import Nav from './Nav';
import Profile from './Profile';
import Statement from './Statement';

class Portfolio extends React.Component{
  render(){
    return(
      <div>
        <Nav value={2}/>
        <Profile />
        <Statement />
        <div className="main-container">
          <div id="left-sidebar">

          </div>

          <div id="right-sidebar">

          </div>
        </div>
      </div>
    )
  }
};

export default Portfolio;
