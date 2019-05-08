import React from "react";

import axios from 'axios';

import Friend from './Friend';

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
      .then(res => this.setState({ friends: res.friends }))
      .catch(err => console.log(err));
  }

  render() {
    let newFriends = this.state.friends;

    return (
      <div>

        {newFriends.map(friend => (
          <Friend friends={friend} />
        ))}

      </div>
    );
  }
}

export default FriendList;
