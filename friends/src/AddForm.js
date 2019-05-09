import React from "react";

import "./AddForm.css";

class AddForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        friends: props.friends,
        friend: {
            id: '',
            name: '',
            age: '',
            email: ''
        }

      }
  }

handleChange= e =>{
    this.setState({
        friend: {
            ...this.state.friend, 
            [e.target.name]: e.target.value
        }
    })
}

  postFriend = e => {
      e.preventDefault();

      this.props.postFriend(this.state.friend)
  }

  render() {
    return (
      <div className="add-form">
        <h1>Add a friend!</h1>

        <input 
        type="text" 
        name="name"
        placeholder="Name" 
        onChange={this.handleChange}
        value={this.state.friend.name}
        />

        <input 
        type="text" 
        name="age"
        placeholder="Age" 
        onChange={this.handleChange}
        value={this.state.friend.age}
        />

        <input 
        type="text" 
        name="email"
        placeholder="Email" 
        onChange={this.handleChange}
        value={this.state.friend.email}
        />

        <button onClick={this.postFriend}> Add </button>
      </div>
    );
  }
}

export default AddForm;
