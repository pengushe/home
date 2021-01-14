import React from 'react';
import './App.css';

const Profile = props => {
  return (
    <div class="col-md-3 col-xs-4 designer-list">
      <div class="designer-img">
        <img src={props.image} alt="" />
      </div>
      <div class="designer-info">
        <h2>{props.author}</h2>
        <p>{props.description}</p>
      </div>
    </div>

  );
}
export default Profile;