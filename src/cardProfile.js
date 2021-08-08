import React, { component } from 'react'

class CardProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.cardData.name,
      colorIdentity: this.props.cardData.colorIdentity,
      manaCost: this.props.cardData.cmc,
      image: this.props.cardData.imageUrl,
      text: this.props.cardData.text
    }
  }





  render () {
    /*Console log for testing below */
    var color = this.state.colorIdentity;
    console.log('this props: ', this.props.cardData);


    var card = this.props.cardData;
    return (
    <div>
      <h1>{this.state.name}</h1>
      <div>{color}</div>
      <div>{this.state.manaCost}</div>
      <img src={this.state.image}/>
      <div>{this.state.text}</div>

    </div>
    )
  }
}

export default CardProfile