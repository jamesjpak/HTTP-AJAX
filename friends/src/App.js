import React from "react";

import FriendList from "./FriendList";
import AddForm from "./AddForm";

import "./App.css";

import axios from "axios";

import { Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      postSuccessMessage: '',
      postError: '',
      putSuccessMessage: '',
      putError: '',
      deleteSuccessMessage: '',
      deleteError: '',
      showForm: 'post'
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  postFriend = newFriend => {
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data,
          postSuccessMessage: res.data.successMessage
        })
      })
      .catch(err => {
        console.log(err.response);
      });
  };



  render() {
    return (
      <div className="App">

      <Route path="/" render={ (props) => 
      <FriendList 
      friends={this.state.friends} 
      {...props} /> } 
      />

      <Route path="/" render={ (props) =>  
      <AddForm 
      friends={this.state.friends} 
      postFriend={this.postFriend} 
      postSuccessMessage={this.state.postSuccessMessage} 
      postErrorMessage={this.state.postError} 
      {...props} /> } 
      />

        
      </div>
    );
  }
}

export default App;
