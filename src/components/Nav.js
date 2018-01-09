import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';

function Nav(){
  return(
      <AppBar
        iconElementLeft={
          <Tabs inkBarStyle={{background: 'white'}} >
            <Tab label="Hello" className="tabs"/>
            <Tab label="Resume" className="tabs"/>
            <Tab label="PortFolio" className="tabs"/>
          </Tabs>
        }
        className="appbar-content"
      >
      </AppBar>
  )
}

export default Nav;
