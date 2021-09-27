import React from 'react'

const CardProfile = (props) => {



// console.log(props);
//need to make card clickable to view card data

    return (
        <li className="container">
            <div className="card"style={{maxWidth: "240px"}}>
                <div className="card-image waves-effect waves-block waves-light">
                   <img src={props.card.imageUrl} />
                </div>
                <div className="card-content">
                    <p><a href="#" onClick={() => props.viewCardInfo(props.cardId)}>{props.card.name}</a></p>
                </div>
            </div>
        </li>
    )
}


export default CardProfile