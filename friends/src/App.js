import React from 'react';

import FriendList from './FriendList';
import AddForm from './AddForm';

import './App.css';

import axios from 'axios';

class App extends React.Component {
constructor() {
  super();
  this.state = {
    friends: []
  }
}

componentDidMount() {
  axios
    .get("http://localhost:5000/friends")
    .then(res => this.setState({ friends: res.data }))
    .catch(err => console.log(err));

}

  render() {
  return (
    <div className="App">
    <FriendList friends={this.state.friends} />
    <AddForm />
    </div>
  );
  }
}

export default App;
