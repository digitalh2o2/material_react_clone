import React from 'react';

class SocialLinks extends React.Component{
  render(){
    return(
      <div className="social-container">
        <div className="border">
          <div className="social-icons">
            <i class="fa fa-github fa-3x" aria-hidden="true"></i>
            <p>Github</p>
          </div>
          <div className="social-icons">
            <i class="fa fa-linkedin fa-3x" aria-hidden="true"></i>
            <p>LinkedIn</p>
          </div>
          <div className="social-icons">
            <i class="fa fa-twitter fa-3x" aria-hidden="true"></i>
            <p>Twitter</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SocialLinks;
