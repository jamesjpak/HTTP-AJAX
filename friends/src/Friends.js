import React from 'react';


class Friends extends React.Component {
constructor() {
    super();
    this.state = {
        doggies: []
    }
}


    componentDidMount() {
        axios
          .get('http://localhost:5000/friends')
          .then(response => console.log(response))
          .catch(err => console.log(err));
      }


    render() {
        return (

        )
    }
}