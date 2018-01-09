import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainPage from './MainPage'
import './../App.css';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <MainPage />
      </MuiThemeProvider>
    );
  }
}

export default App;
