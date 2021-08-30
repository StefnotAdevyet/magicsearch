import React from 'react'

function CardProfile (props) {



const card = props.card;

    return (
    <li>
    <h1 id="name">{card.name}</h1>
    <img className="cardImg"src={card.imageUrl} />
    <div>{card.text}</div>
    </li>
    )
}


export default CardProfile