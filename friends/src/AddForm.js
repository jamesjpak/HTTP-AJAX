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

        <input type="text" 
        placeholder="Name" 
        />

        <input 
        type="text" 
        placeholder="Age" 
        />

        <input 
        type="text" 
        placeholder="Email" 
        />

        <button> Add </button>
      </div>
    );
  }
}

export default AddForm;
