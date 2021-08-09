import React, { Component } from 'react';
import endpoint from './config';
import CardProfile from './cardProfile';
import Search from './Search';
import View from './View'

import './App.css'
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
    fetch('https://api.magicthegathering.io/v1/cards')
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
    var listOfCards = this.state.cardData.cards
/*Console log for testing below */
    //console.log('list of cards: ', listOfCards)

    if (!isLoaded) {
      return (
        <div>Loading...</div>
      )
    } else {
      return (

        <>
        <Search />
        <View cards={listOfCards}/>
        </>
      );
    }
  }

};


  export default App;
