import React from "react";

import axios from "axios";

import Friend from "./Friend";
import './FriendList.css';


class FriendList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));

  }


  render() {
    

    return (
      <div>
        {this.state.friends.map(friend => (
          <Friend friends={friend} />
        ))}
      </div>
    );
  }
}

export default FriendList;
