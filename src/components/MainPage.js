import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs'


class MainPage extends React.Component{
  render(){
    return(
      <Tabs >
        <div>
          <Tab label="Hello" className="tabs-main"></Tab>
          <Tab label="Resume" className="tabs-main"></Tab>
          <Tab label="PortFolio" className="tabs-main"></Tab>
        </div>

      </Tabs>
    )
  }
}

export default MainPage;
