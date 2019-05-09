import React from "react";

import Friend from "./Friend";
import './FriendList.css';


class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: props.friends
    };
  }

  render() {
    return (
      <div>
        {this.props.friends.map(friend => (
          <Friend friends={friend} />
        ))}
      </div>
    );
  }
}

export default FriendList;
