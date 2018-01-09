import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainPage from './MainPage'
import Nav from './Nav';
import './../App.css';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Nav />
        <MainPage />
      </MuiThemeProvider>
    );
  }
}

export default App;
