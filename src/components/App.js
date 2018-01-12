import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainPage from './MainPage'
import Resume from './Resume';
import Portfolio from './Portfolio';
import Nav from './Nav';
import SocialLinks from './SocialLinks';
import Footer from './Footer';
import './../App.css';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/resume" component={Resume} />
            <Route path="/portfolio" component={Portfolio} />
            <Route render={() => {
              return <p>Not Found</p>
            }}/>
          </Switch>
        </Router>
        <SocialLinks />
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;
