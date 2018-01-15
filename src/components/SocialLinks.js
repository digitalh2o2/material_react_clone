import React from 'react';

function SocialLinks(){
  return(
    <div className="social-container">
      <div className="border">
        <div className="social-icons">
          <i className="fa fa-github fa-3x" aria-hidden="true"></i>
          <p><a href="https://www.github.com/digitalh2o2">Github</a></p>
        </div>
        <div className="social-icons">
          <i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
          <p><a href="https://www.linkedin.com">LinkedIn</a></p>
        </div>
        <div className="social-icons">
          <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
          <p><a href="https://www.twitter.com/digitalh2ocode">Twitter</a></p>
        </div>
      </div>
    </div>
  )
}

export default SocialLinks;
