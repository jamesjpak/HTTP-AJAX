import React from "react";
import './Friend.css';

const Friend = props => {


  return (
    <div className="panels">

      <div> Name: {props.friends.name} </div>

      <div> Age: {props.friends.age} </div>

      <div> Email: {props.friends.email} </div>
    </div>
  );
};

export default Friend;
