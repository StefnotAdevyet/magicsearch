import React from 'react'

function CardProfile (props) {


console.log(props.card)
const card = props.card;

    return (
    <li>
    <h1 id="name">{card.name}</h1>
    <img src={card.imageUrl} />
    </li>
    )
}


export default CardProfile