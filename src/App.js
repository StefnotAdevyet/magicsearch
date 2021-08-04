import React, { Component } from 'react';
import endpoint from './config'
/*
need to add the api call response to the component so it renders
the first item in the response data when the app start up
*/


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
      isLoaded: false
    }
  }

  componentDidMount () {
    fetch('https://api.magicthegathering.io/v1/cards/1')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        cardData: json,
      })
    });
  }

  render() {

    var { cardData, isLoaded } = this.state;

    if (!isLoaded) {
      return (
        <div>Loading...</div>
        )
    } else {
      return (
        <div>{cardData.card.name}</div>
      );
    }
  }

};


  export default App;
