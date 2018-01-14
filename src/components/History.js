import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import CircularProgress from 'material-ui/CircularProgress';


class History extends React.Component{
  render(){
    return(
      <div>

        {/* Work History */}

        <h2 className="subject-color">Work</h2>
        <Stepper orientation="vertical">
          <Step active={true}>
            <StepLabel>ABC Company -- Sometown, NY  •  Lead Programmer  • 2009 to Present</StepLabel>
            <StepContent>
              <p>Develop, maintain and support application programs for administrative, Web and mobile systems using Java and related tools. Analyze code for system testing and debugging; create test transactions to find, isolate and rectify issues; and manage a team of three programmers.</p>
            </StepContent>
          </Step>
          <Step active={true}>
            <StepLabel>DEF COMPANY -- Sometown, NJ  •  Lead Programmer  •  2005 to 2008</StepLabel>
            <StepContent>
              <p>Led programming tasks including enhancements, maintenance and support for clients’ applications and interfaces. Engineered software products, handling complex analysis and intricate programming to meet project requirements.</p>
            </StepContent>
          </Step>
          <Step active={true}>
            <StepLabel>GHI COMPANY -- Sometown, NJ  •  Programmer I •  2004 to 2005</StepLabel>
            <StepContent>
              <p>Progressed through promotions, culminating in responsibility for Web-based application programming within high-volume setting. Became adept in analyzing code for system testing and debugging.</p>
            </StepContent>
          </Step>
        </Stepper>

        {/* Professional Skills */}

        <div>
          <h2 className="subject-color">Professional Skills</h2>
          <div className="professional-container">
            <div className="progress-icon">
              <CircularProgress
                mode="determinate"
                size={100}
                thickness={5}
                value={100}
              />
              <p>Design</p>
            </div>
            <div className="progress-icon">
              <CircularProgress
                mode="determinate"
                size={100}
                thickness={5}
                value={90}
              />
              <p>Concepts</p>
            </div>
            <div className="progress-icon">
              <CircularProgress
                mode="determinate"
                size={100}
                thickness={5}
                value={90}
              />
              <p>OOP</p>
            </div>
            <div className="progress-icon">
              <CircularProgress
                mode="determinate"
                size={100}
                thickness={5}
                value={90}
              />
              <p>Teamwork</p>
            </div>
            <div className="progress-icon">
              <CircularProgress
                mode="determinate"
                size={100}
                thickness={5}
                value={90}
              />
              <p>Management</p>
            </div>
          </div>
        </div>

        {/* Education */}

        <div>
          <h2 className="subject-color">Education</h2>
          <Stepper orientation="vertical">
            <Step active={true}>
              <StepLabel>ABC UNIVERSITY -- Sometown, NY • 2005 - 2007</StepLabel>
              <StepContent>
                <p>MS in Software Engineering Candidate</p>
              </StepContent>
            </Step>
            <Step active={true}>
              <StepLabel>DEF UNIVERSITY -- Sometown, NJ
 • 1999 - 2003</StepLabel>
              <StepContent>
                <p>BS in Computer Information Science</p>
              </StepContent>
            </Step>
          </Stepper>
        </div>

      </div>
    )
  }
};

export default History;
