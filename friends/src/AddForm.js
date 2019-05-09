import React from "react";

import "./AddForm.css";

class AddForm extends React.Component {
  

  render() {
    return (
      <div className="add-form">
        <h1>Add a friend!</h1>

        <input type="text" placeholder="Name" />

        <input type="text" placeholder="Age" />

        <input type="text" placeholder="Email" />

        <button> Add </button>
      </div>
    );
  }
}

export default AddForm;
