import React from 'react';

import './AddForm.css';

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: props.friends,
      friend: this.props.activeFriend
    };
  }

  handleChange = e => {
    e.persist();

    this.setState( prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: e.target.value
      }

    }));
  };

  handleSubmit = e => {
    e.preventDefault();

    
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-form">
        <h1>Update Friend</h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          
        />

        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={this.handleChange}
          
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={this.handleChange}
          
        />

        <button onClick={this.handleSubmit} > Update </button>
      </form>
    );
  }
}

export default UpdateForm;
