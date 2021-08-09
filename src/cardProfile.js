import React, { component } from 'react'

class CardProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.card.name,
      colorIdentity: this.props.card.colorIdentity,
      manaCost: this.props.card.cmc,
      image: this.props.card.imageUrl,
      text: this.props.card.text
    }
  }





  render () {
    /*Console log for testing below */
   // console.log('this props: ', this.props);
    var color = this.state.colorIdentity;



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