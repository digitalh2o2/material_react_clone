import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainPage from './MainPage'
import Nav from './Nav';
import SocialLinks from './SocialLinks';
import Footer from './Footer';
import './../App.css';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Nav />
        <MainPage />
        <SocialLinks />
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;
