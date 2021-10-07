import React from 'react'

const CardProfile = (props) => {



// console.log(props);
//need to make card clickable to view card data

    return (
        <div className="card-container">
            <div className="card">
                <div className="card-image">
                   <img src={props.card.imageUrl ? props.card.imageUrl : 'src/imgNotFound.jpg'} onClick={() => props.viewCardInfo(props.cardId)} alt="not found"/>
                </div>
                <div className="card-content">
                    <p><a href="#" onClick={() => props.viewCardInfo(props.cardId)}>{props.card.name}</a></p>
                </div>
            </div>
        </div>
    )
}


export default CardProfile