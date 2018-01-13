import React from 'react';
import Nav from './Nav';
import Profile from './Profile';
import Statement from './Statement';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';

class Resume extends React.Component{
  render(){
    return(
      <div>
        <Nav value={1}/>
        <Profile />
        <Statement />
        <div className="main-container">
          <div id="left-sidebar">
            <h2 className="subject-color">Personal</h2>
              <h4>Name: <TextField /></h4>
              <h4>Birthday: <TextField /></h4>
              <h4>Relationship: <TextField /></h4>
              <h4>Nationality: <TextField /></h4>
              <h4>Languages: <TextField /></h4>
              <h4>Telephone: <TextField /></h4>

            <h2 className="subject-color">Software</h2>

            <h4>Html:
              <LinearProgress mode="determinate"
                value={100}
                style={{width: '80%'}}
              />
            </h4>

            <h4>CSS:
              <LinearProgress mode="determinate"
                value={90}
                style={{width: '80%'}}
              />
            </h4>

            <h4>SASS:
              <LinearProgress mode="determinate"
                value={90}
                style={{width: '75%'}}
              />
            </h4>

            <h4>JavaScript:
              <LinearProgress mode="determinate"
                value={80}
                style={{width: '80%'}}
              />
            </h4>

            <h4>React:
              <LinearProgress mode="determinate"
                value={50}
                style={{width: '80%'}}
              />
            </h4>

            <h4>Angular:
              <LinearProgress mode="determinate"
                value={50}
                style={{width: '80%'}}
              />
            </h4>

            <br></br>

            <h2 className="subject-color">Hobbies</h2>
            <div className="hobbie-container">
              <div className="hobbie-icons">
                <i className="material-icons">flight_takeoff</i>
                <p>Traveling</p>
              </div>
              <div className="hobbie-icons">
                <i className="material-icons">local_cafe</i>
                <p>Reading</p>
              </div>
              <div className="hobbie-icons">
                <i className="material-icons">computer</i>
                <p>Technology</p>
              </div>
              <div className="hobbie-icons">
                <i className="material-icons">fitness_center</i>
                <p>Working Out</p>
              </div>
              <div className="hobbie-icons">
                <i className="material-icons">videogame_asset</i>
                <p>Videogames</p>
              </div>
            </div>
          </div>

          <div id="right-sidebar">

          </div>
        </div>
      </div>
    )
  }
};

export default Resume;
