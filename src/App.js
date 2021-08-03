import React, { Component } from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardData: []
    }
  }

  render() {

  return (
    <div>{this.state.cardData}</div>
    );

  }

};


  export default App;
