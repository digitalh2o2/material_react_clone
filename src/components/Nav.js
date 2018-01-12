import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {BrowserRouter} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Resume from './Resume';
import Portfolio from './Portfolio';
var Link = require('react-router-dom').Link;

class Nav extends React.Component{


  render(){
    return(
        <AppBar
          iconElementLeft={
            <Tabs
              inkBarStyle={{background: 'white'}}
            >
              <Tab label="Hello"  containerElement={<Link to="/" />} className="tabs"/>
              <Tab label="Resume" containerElement={<Link to="/resume" />} className="tabs"/>
              <Tab label="PortFolio" containerElement={<Link to="/portfolio" />}className="tabs"/>
            </Tabs>
          }
          className="appbar-content"
        >
        </AppBar>
    )
  }
}

export default Nav;
