import React from "react";
import './Friend.css';

const Friend = props => {

 //   const updateFriend = e => {
 //       e.prevent.Default();
 //       props.setActiveFriend(friend)
 //   } 

  return (
    <div className="panels">

      <div className="styles"> Name: {props.friends.name} </div>

      <div className="styles"> Age: {props.friends.age} </div>

      <div className="styles"> Email: {props.friends.email} </div>

      <button onClick='' > Update Friend Info </button>
    </div>
  );
};

export default Friend;
