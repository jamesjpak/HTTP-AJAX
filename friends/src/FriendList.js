import React from "react";

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
