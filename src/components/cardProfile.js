import React from 'react'

const CardProfile = (props) => {



// console.log(props);
//need to make card clickable to view card data

    return (
        <li className="container" style={{display: "inline-block", maxWidth: "240px", margin: "5px", justifyContent: "center"}}>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                   <img src={props.card.imageUrl} style={{maxWidth: "240px"}} onClick={() => props.viewCardInfo(props.cardId)} alt="not found"/>
                </div>
                <div className="card-content">
                    <p><a href="#" onClick={() => props.viewCardInfo(props.cardId)}>{props.card.name}</a></p>
                </div>
            </div>
        </li>
    )
}


export default CardProfile