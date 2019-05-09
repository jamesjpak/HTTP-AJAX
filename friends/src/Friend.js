import React from "react";
import './Friend.css';

const Friend = props => {


  return (
    <div className="panels">

      <div className="styles"> Name: {props.friends.name} </div>

      <div className="styles"> Age: {props.friends.age} </div>

      <div className="styles"> Email: {props.friends.email} </div>
    </div>
  );
};

export default Friend;
