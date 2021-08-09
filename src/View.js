import React, { Component } from 'react';
import CardProfile from './cardProfile';

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props
    }
  }


  render() {
   // console.log(this.props.cards, this.state)
    var cards = this.state.data.cards
    return (
      <div>
        {cards.map((card) => (
          <CardProfile card={card} />
        ))}
      </div>
          )
  }
}


export default View