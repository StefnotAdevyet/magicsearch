import React from 'react'

const CardProfile = (props) => {



// console.log(props);
//need to make card clickable to view card data

    return (
        <li className="container">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                   {
                       props.card.name
                   }
                </div>
                <div className="card-content">
                    <p><a href="#" onClick={() => props.viewCardInfo(props.cardId)}>View More Info</a></p>
                </div>
            </div>
        </li>
    )
}


export default CardProfile