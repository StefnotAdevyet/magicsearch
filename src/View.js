import React, { Component } from 'react';
import CardProfile from './cardProfile';

function View (props) {




    console.log('cards: ', props.cards)
    var cards = props
    return (
      <ul>
        {cards.map((card) => (
          <CardProfile card={card} />
        )), []}
      </ul>
          )
  }



export default View