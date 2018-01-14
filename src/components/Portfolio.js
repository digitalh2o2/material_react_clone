import React from 'react';
import Nav from './Nav';
import Profile from './Profile';
import Statement from './Statement';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';

function Portfolio(){
  return(
    <div>
      <Nav value={2}/>
      <Profile />
      <Statement />
      <div className="main-container">
        <div className="project-container">
          <div className="specific-project-container one">
            <h2 className="subject-color">Project 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p><a href="https://www.example.com" className="subject-color">www.example.com/project1</a></p>
          </div>
          <img src={project1} alt="image" />
        </div>

        <div className="project-container">
          <img src={project2} alt="Project 2" />
          <div className="specific-project-container">
            <h2 className="subject-color">Project 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p><a href="https://www.example.com" className="subject-color">www.example.com/project2</a></p>
          </div>
        </div>

        <div className="project-container">
          <div className="specific-project-container one">
            <h2 className="subject-color">Project 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p><a href="https://www.example.com" className="subject-color">www.example.com/project3</a></p>
          </div>
          <img src={project3} alt="Project 3" />
        </div>
      </div>
    </div>
  )
};

export default Portfolio;
