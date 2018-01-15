import React from 'react';

const avatar = 'https://image.freepik.com/free-icon/male-profile-user-shadow_318-40244.jpg';

function Profile(){
  return(
    <div className="profile-container">
      <div id="profile-info">
        <h1>Mark Smith</h1>
        <h4>Web Developer</h4>
      </div>
      <span id="user-avatar">
        <img src={avatar} alt="Avatar" />
      </span>
    </div>
  )
}

export default Profile;
