import React, { component } from 'react'

class CardProfile extends React.Component {


  render () {
    /*Console log for testing below */
    console.log(this.props.cardData);

    var card = this.props.cardData;
    return (
    <div>
      <h1>{card.name}</h1>
      <div>{card.colorIdentity || 'colorless'}</div>
      <div>{card.cmc}</div>
      <img src={card.imageUrl}/>
      <div>{card.text}</div>

    </div>
    )
  }
}

export default CardProfile