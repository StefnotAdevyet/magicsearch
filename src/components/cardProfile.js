import React from 'react'

const CardProfile = (props) => {



// console.log(props);
//need to make card clickable to view card data

    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                   {
                       props.card.name
                   }
                </div>
            </div>
        </div>
    )
}


export default CardProfile